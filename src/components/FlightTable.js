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

import { convertedFligts } from '../data';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    minHeight: '10vh'
  }
});

const Progress = () => (
  <div>
    <LinearProgress />
  </div>
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
              <TableCell>
                {f.departureTime} {f.from}
              </TableCell>
              <TableCell>
                {f.arrivalTime} {f.to}
              </TableCell>
              <TableCell>3 h 30 m</TableCell>
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
  return { flights: convertedFligts };
}

const FlightTableWrapper = withStyles(styles)(FlightTable);

export default connect(mapStateToProps)(FlightTableWrapper);
