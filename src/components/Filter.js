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
import { cabinFilter, timeFilter } from '../constants';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  buttonRow: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

const CabinField = ({ title, name, value, onChange }) => (
  <FormControl fullWidth>
    <InputLabel>{title}</InputLabel>
    <Select name={name} value={value} onChange={onChange}>
      {Object.keys(cabinFilter).map(c => (
        <MenuItem key={cabinFilter[c]} value={cabinFilter[c]}>
          {c}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const TimeField = ({ title, name, value, onChange }) => (
  <FormControl fullWidth>
    <InputLabel>{title}</InputLabel>
    <Select name={name} value={value} onChange={onChange}>
      {Object.keys(timeFilter).map(t => (
        <MenuItem key={timeFilter[t].value} value={timeFilter[t].value}>
          {timeFilter[t].text}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const initState = {
  cabin: cabinFilter.ALL,
  from: '',
  to: '',
  departureTime: timeFilter.ANY_TIME.value,
  arrivalTime: timeFilter.ANY_TIME.value
};
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  reset = e => {
    e.preventDefault();
    this.setState(initState);
  };

  handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const cabinInput = (
      <CabinField
        title="Cabin"
        name="cabin"
        value={this.state.cabin}
        onChange={this.handleInput}
      />
    );

    const fromInput = (
      <FormControl fullWidth>
        <TextField
          label="From"
          margin="dense"
          name="from"
          value={this.state.from}
          onChange={this.handleInput}
        />
      </FormControl>
    );
    const toInput = (
      <FormControl fullWidth>
        <TextField
          label="To"
          margin="dense"
          name="to"
          value={this.state.to}
          onChange={this.handleInput}
        />
      </FormControl>
    );

    const departureTimeInput = (
      <TimeField
        title="Departure Time"
        name="departureTime"
        value={this.state.departureTime}
        onChange={this.handleInput}
      />
    );

    const arrivalTimeInput = (
      <TimeField
        title="Arrival Time"
        name="arrivalTime"
        value={this.state.arrivalTime}
        onChange={this.handleInput}
      />
    );

    const resetButton = (
      <Button
        variant="outlined"
        fullWidth
        className={classes.button}
        onClick={this.reset}
      >
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
          <Grid
            item
            container
            xs={12}
            justify="flex-end"
            className={classes.buttonRow}
          >
            <Grid item xs={12} sm={6}>
              {resetButton}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default withStyles(styles)(Filter);
