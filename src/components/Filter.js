import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit
  },
  cabin: {
    minWidth: 120
  },
  time: {
    minWidth: 180
  },
  input: {
    margin: theme.spacing.unit * 1.3,
    maxWidth: 120
  },
  icon: {
    margin: theme.spacing.unit * 2
  }
});

const Filter = ({ classes }) => (
  <Paper className={classes.paper}>
    <FormControl className={classNames(classes.formControl, classes.cabin)}>
      <InputLabel>Cabin</InputLabel>
      <Select>
        <MenuItem value="all">ALL</MenuItem>
        <MenuItem value="cheap">CHEAP</MenuItem>
        <MenuItem value="business">BUSINESS</MenuItem>
      </Select>
    </FormControl>
    <TextField label="From" margin="dense" className={classes.input} />
    <TextField label="To" margin="dense" className={classes.input} />
    <FormControl className={classNames(classes.formControl, classes.time)}>
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
    <FormControl className={classNames(classes.formControl, classes.time)}>
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
    <IconButton className={classes.icon}>
      <ReplayIcon />
    </IconButton>
  </Paper>
);
export default withStyles(styles)(Filter);
