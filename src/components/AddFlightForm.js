import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  }
});

const AddFlightForm = ({ classes }) => (
  <Paper className={classes.paper}>
    <h1>AddFlightForm</h1>
  </Paper>
);

export default withStyles(styles)(AddFlightForm);
