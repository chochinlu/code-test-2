import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import Information from './components/Information';
import Flight from './components/Flight';
import AddFlightForm from './components/AddFlightForm';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  row: {
    padding: theme.spacing.unit
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />
        <Menu />
        <Grid container spacing={0} className={classes.row}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Information />
              <Flight />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <AddFlightForm />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
