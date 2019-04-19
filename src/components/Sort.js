import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  }
});

const Sort = ({ classes }) => (
  <Paper className={classes.paper}>
    <h2>Sort by</h2>
    <p>by price, by name, by time...</p>
  </Paper>
);
export default withStyles(styles)(Sort);
