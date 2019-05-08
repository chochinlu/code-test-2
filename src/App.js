import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import FlightTable from './components/FlightTable';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Actions from './components/Actions';
import { connect } from 'react-redux';
import { getFlights } from './redux/actions';
import { cabin } from './constants';
import Notifications from './components/Notifications';

const styles = theme => ({
  row: {
    padding: theme.spacing.unit,
    maxWidth: '80rem',
    margin: '0 auto'
  }
});

const App = ({ classes, getFlights }) => {
  useEffect(() => {
    getFlights(cabin.CHEAP);
    getFlights(cabin.BUSINESS);
  });

  return (
    <div>
      <CssBaseline />
      <Menu />
      <Notifications />
      <Grid container spacing={8} className={classes.row}>
        <Grid item xs={12} sm={4}>
          <Actions />
        </Grid>
        <Grid item xs={12} sm={8}>
          <FlightTable />
        </Grid>
      </Grid>
    </div>
  );
};

const AppWrapper = withStyles(styles)(App);

export default connect(
  null,
  { getFlights }
)(AppWrapper);
