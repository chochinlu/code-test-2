import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { convertMillisecondsToTime, duration } from '../utils/converters';
import { getFilteredFlights } from '../redux/selectors';
import { convertedFligts } from '../data';

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

const FlightTable = ({ classes, flights }) => {
  if (flights.length === 0)
    return (
      <Paper className={classes.paper}>
        <Typography variant="h4">No data.</Typography>
      </Paper>
    );

  return (
    <Paper className={classes.paper}>
      {/* <Progress /> */}
      <Typography variant="h6" className={classes.total}>
        Total: {flights.length}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cabin</TableCell>
            <TableCell>Departure</TableCell>
            <TableCell>Arrival</TableCell>
            <TableCell>Flight Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map(f => (
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
              <TableCell>{duration(f.arrivalTime, f.departureTime)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p>paging</p>
    </Paper>
  );
};

function mapStateToProps(state) {
  // return { flights: state.flights };
  return {
    flights: getFilteredFlights({
      flights: convertedFligts,
      filter: state.filter
    })
  };
}

const FlightTableWrapper = withStyles(styles)(FlightTable);

export default connect(mapStateToProps)(FlightTableWrapper);
