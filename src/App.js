import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import Information from './components/Information';
import FlightTable from './components/FlightTable';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Actions from './components/Actions';

const styles = theme => ({
  row: {
    padding: theme.spacing.unit
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Menu />
        <Information />
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
  }
}

export default withStyles(styles)(App);
