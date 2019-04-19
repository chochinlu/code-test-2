import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, InlineTimePicker } from 'material-ui-pickers';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  timePicker: {
    marginTop: theme.spacing.unit
  },
  buttonRow: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

const AddFlightForm = ({ classes }) => {
  const [departureTime, handleDepartureTimeChange] = useState(new Date());
  const [arrivalTime, handleArrivalTimeChange] = useState(new Date());

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
    <InlineTimePicker
      seconds
      format="hh:mm:ss a"
      label="Departure Time"
      fullWidth
      className={classes.timePicker}
      value={departureTime}
      onChange={handleDepartureTimeChange}
    />
  );

  const arrivalTimeInput = (
    <InlineTimePicker
      seconds
      format="hh:mm:ss a"
      label="Arrival Time"
      fullWidth
      className={classes.timePicker}
      value={arrivalTime}
      onChange={handleArrivalTimeChange}
    />
  );

  const clearButton = (
    <Button variant="outlined" className={classes.button} fullWidth>
      Clear
    </Button>
  );

  const addButton = (
    <Button variant="outlined" className={classes.button} fullWidth>
      Add Flight
    </Button>
  );

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.paper}>
        <form>
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
            <Grid
              item
              container
              xs={12}
              spacing={8}
              className={classes.buttonRow}
            >
              <Grid item xs={12} sm={6}>
                {clearButton}
              </Grid>
              <Grid item xs={12} sm={6}>
                {addButton}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(AddFlightForm);
