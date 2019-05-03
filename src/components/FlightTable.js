import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { convertMillisecondsToTime, duration } from '../utils/converters';
import { getTargetFlights } from '../redux/selectors';
import { setOrder } from '../redux/actions';
import { cabin, flightTableHead } from '../constants';
import TablePaginationActionsWrapped from './TablePaginationActions';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    minHeight: '10vh'
  },
  total: {
    paddingLeft: theme.spacing.unit * 2
  },
  span: {
    paddingLeft: theme.spacing.unit
  }
});

const Progress = () => (
  <div>
    <LinearProgress />
  </div>
);

const AirPortField = ({ classes, time, airport }) => (
  <TableCell>
    <Typography inline>{convertMillisecondsToTime(time)}</Typography>
    <Typography inline variant="subtitle2" className={classes}>
      {airport}
    </Typography>
  </TableCell>
);

const FlightTableHead = ({ sort, setOrder }) => (
  <TableHead>
    <TableRow>
      {Object.keys(flightTableHead).map(t => (
        <TableCell key={flightTableHead[t].name}>
          {flightTableHead[t].orderable ? (
            <>
              <Tooltip title="Sort" aria-label="Sort" enterDelay={300}>
                <TableSortLabel
                  direction={sort.order}
                  active={flightTableHead[t].name === sort.orderBy}
                  onClick={() => setOrder(flightTableHead[t].name)}
                >
                  {flightTableHead[t].title}
                </TableSortLabel>
              </Tooltip>
            </>
          ) : (
            <>{flightTableHead[t].title}</>
          )}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

const FlightTable = ({ classes, fetching, flights, sort, setOrder }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSetPage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = e => {
    setPage(0);
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  if (flights.length === 0)
    return (
      <Paper className={classes.paper}>
        <Typography variant="h4">No data.</Typography>
      </Paper>
    );

  return (
    <Paper className={classes.paper}>
      {fetching[cabin.CHEAP] && <Progress />}
      {fetching[cabin.BUSINESS] && <Progress />}
      <Typography variant="h6" className={classes.total}>
        Total: {flights.length}
      </Typography>
      <Table padding="dense">
        <FlightTableHead sort={sort} setOrder={setOrder} />
        <TableBody>
          {flights
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(f => (
              <TableRow key={f.id}>
                <TableCell>{f.cabin}</TableCell>
                <AirPortField
                  classes={classes.span}
                  time={f.departureTime}
                  airport={f.from}
                />
                <AirPortField
                  classes={classes.span}
                  time={f.arrivalTime}
                  airport={f.to}
                />
                <TableCell>
                  {duration(f.arrivalTime, f.departureTime)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 12, 15, 25]}
              colSpan={3}
              count={flights.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true
              }}
              onChangePage={handleSetPage}
              onChangeRowsPerPage={e => handleChangeRowsPerPage(e)}
              ActionsComponent={TablePaginationActionsWrapped}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
};

function mapStateToProps(state) {
  // return { flights: state.flights };
  return {
    flights: getTargetFlights({
      flights: state.flights,
      filter: state.filter,
      sort: state.sort
    }),
    sort: state.sort,
    fetching: state.fetching
  };
}

const FlightTableWrapper = withStyles(styles)(FlightTable);

export default connect(
  mapStateToProps,
  { setOrder }
)(FlightTableWrapper);
