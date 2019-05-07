import React from 'react';
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
import { Formik, Field } from 'formik';
import { cabin, airportInput, timeInput } from '../constants';

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

const CabinInput = props => (
  <FormControl fullWidth>
    <InputLabel>Cabin</InputLabel>
    <Select name="cabin" value={props.cabin} onChange={props.onChange}>
      {Object.keys(cabin).map(k => (
        <MenuItem key={`add-${k}`} value={cabin[k]}>
          {k}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const AirportField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <FormControl fullWidth>
    <TextField
      name={props.airportType.name}
      label={props.airportType.title}
      margin="dense"
      value={field.value[props.airportType.name]}
      onChange={field.onChange}
    />
  </FormControl>
);

const TimeField = props => (
  <InlineTimePicker
    seconds
    format="hh:mm:ss a"
    label={props.timeType.title}
    fullWidth
    name={props.timeType.name}
    className={props.classes}
    value={props.value}
    onChange={value => {
      props.form.setFieldValue(props.timeType.name, value);
    }}
  />
);

const AddFlightForm = ({ classes }) => {
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
    <Grid item xs={12}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Paper className={classes.paper}>
          <Formik
            initialValues={{
              cabin: '',
              from: '',
              to: '',
              departureTime: new Date(),
              arrivalTime: new Date()
            }}
            render={props => (
              <form>
                <Grid container spacing={8}>
                  <Grid item xs={12}>
                    <CabinInput
                      cabin={props.values.cabin}
                      onChange={props.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={AirportField}
                      airportType={airportInput.from}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={AirportField}
                      airportType={airportInput.to}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      value={props.values.departureTime}
                      component={TimeField}
                      timeType={timeInput.departureTime}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      value={props.values.arrivalTime}
                      component={TimeField}
                      timeType={timeInput.arrivalTime}
                    />
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
            )}
          />
        </Paper>
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default withStyles(styles)(AddFlightForm);
