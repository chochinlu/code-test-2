import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

const Filter = ({ classes }) => {
  const cabinInput = (
    <FormControl fullWidth>
      <InputLabel>Cabin</InputLabel>
      <Select>
        <MenuItem value="all">ALL</MenuItem>
        <MenuItem value="cheap">CHEAP</MenuItem>
        <MenuItem value="business">BUSINESS</MenuItem>
      </Select>
    </FormControl>
  );

  const fromInput = (
    <FormControl fullWidth>
      <TextField label="From" margin="dense" />
    </FormControl>
  );
  const toInput = (
    <FormControl fullWidth>
      <TextField label="To" margin="dense" />
    </FormControl>
  );

  const departureTimeInput = (
    <FormControl fullWidth>
      <InputLabel>Departure Time</InputLabel>
      <Select>
        <MenuItem value="1">Any Time</MenuItem>
        <MenuItem value="2">Early Morning (5-7a)</MenuItem>
        <MenuItem value="3">Morning (7-10a)</MenuItem>
        <MenuItem value="3">Noon (10a-2p)</MenuItem>
        <MenuItem value="3">Afternoon (2-6p)</MenuItem>
        <MenuItem value="3">Evening (6-10p)</MenuItem>
        <MenuItem value="3">Night (10-5a)</MenuItem>
      </Select>
    </FormControl>
  );

  const arrivalTimeInput = (
    <FormControl fullWidth>
      <InputLabel>Arrival Time</InputLabel>
      <Select>
        <MenuItem value="1">Any Time</MenuItem>
        <MenuItem value="2">Early Morning (5-7a)</MenuItem>
        <MenuItem value="3">Morning (7-10a)</MenuItem>
        <MenuItem value="3">Noon (10a-2p)</MenuItem>
        <MenuItem value="3">Afternoon (2-6p)</MenuItem>
        <MenuItem value="3">Evening (6-10p)</MenuItem>
        <MenuItem value="3">Night (10-5a)</MenuItem>
      </Select>
    </FormControl>
  );

  const resetButton = (
    <Button variant="outlined" className={classes.button}>
      Reset Filter
    </Button>
  );

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          {cabinInput}
        </Grid>
        <Grid item xs={12} sm={6}>
          {fromInput}
        </Grid>
        <Grid item xs={12} sm={6}>
          {toInput}
        </Grid>
        <Grid item xs={12} sm={6}>
          {departureTimeInput}
        </Grid>
        <Grid item xs={12} sm={6}>
          {arrivalTimeInput}
        </Grid>
        <Grid item container xs={12} justify="flex-end">
          {resetButton}
        </Grid>
      </Grid>
    </Paper>
  );
};
export default withStyles(styles)(Filter);
