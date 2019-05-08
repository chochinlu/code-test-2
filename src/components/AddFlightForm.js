import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, InlineTimePicker } from 'material-ui-pickers';
import { Formik, Field, Form } from 'formik';
import { cabin, airportInput, timeInput } from '../constants';
import { connect } from 'react-redux';
import { addFlight } from '../redux/actions';
import * as yup from 'yup';

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
  <FormControl fullWidth error={props.hasError}>
    <InputLabel>Cabin</InputLabel>
    <Select
      id="cabin"
      name="cabin"
      value={props.cabin}
      onChange={props.onChange}
    >
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
  <FormControl fullWidth error={props.hasError}>
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

const initValue = {
  cabin: '',
  from: '',
  to: '',
  departureTime: new Date(),
  arrivalTime: new Date()
};

const ClearButton = props => (
  <Button
    variant="outlined"
    className={props.classes}
    fullWidth
    onClick={() => props.onClick(initValue)}
  >
    Clear
  </Button>
);

const AddButton = props => (
  <Button type="submit" variant="outlined" className={props.classes} fullWidth>
    Add Flight
  </Button>
);

const schema = yup.object().shape({
  cabin: yup
    .string()
    .required()
    .oneOf(Object.keys(cabin).map(k => cabin[k])),
  from: yup
    .string()
    .required()
    .max(20),
  to: yup
    .string()
    .required()
    .max(20),

  departureTime: yup.date().required(),
  arrivalTime: yup
    .date()
    .required()
    .min(yup.ref('departureTime'), 'must larger than departure time.')
});

const AddFlightForm = ({ classes, addFlight }) => (
  <Grid item xs={12}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.paper}>
        <Formik
          initialValues={initValue}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            addFlight(values);
            actions.resetForm(initValue);
          }}
          render={props => (
            <Form>
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <CabinInput
                    hasError={props.errors.cabin && props.errors.cabin !== ''}
                    cabin={props.values.cabin}
                    onChange={props.handleChange}
                  />
                  {props.errors.cabin && (
                    <FormHelperText error>{props.errors.cabin}</FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    hasError={props.errors.from && props.errors.from !== ''}
                    component={AirportField}
                    airportType={airportInput.from}
                  />
                  {props.errors.from && (
                    <FormHelperText error>{props.errors.from}</FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    hasError={props.errors.to && props.errors.to !== ''}
                    component={AirportField}
                    airportType={airportInput.to}
                  />
                  {props.errors.to && (
                    <FormHelperText error>{props.errors.to}</FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    value={props.values.departureTime}
                    component={TimeField}
                    timeType={timeInput.departureTime}
                  />
                  {props.errors.departureTime && (
                    <FormHelperText error>
                      {props.errors.departureTime}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    value={props.values.arrivalTime}
                    component={TimeField}
                    timeType={timeInput.arrivalTime}
                  />
                  {props.errors.arrivalTime && (
                    <FormHelperText error>
                      {props.errors.arrivalTime}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  spacing={8}
                  className={classes.buttonRow}
                >
                  <Grid item xs={12} sm={6}>
                    <ClearButton
                      classes={classes.button}
                      onClick={props.resetForm}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <AddButton classes={classes.button} />
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        />
      </Paper>
    </MuiPickersUtilsProvider>
  </Grid>
);

const AddFlightFormWrapper = withStyles(styles)(AddFlightForm);

export default connect(
  null,
  { addFlight }
)(AddFlightFormWrapper);
