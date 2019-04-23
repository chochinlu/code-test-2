import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddFlightForm from './AddFlightForm';
import Filter from './Filter';
// import Sort from './Sort';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Actions = ({ noFlights }) => {
  return (
    <Grid container spacing={8}>
      <Route path="/add_flight" component={AddFlightForm} />

      {noFlights ? null : (
        <Grid item xs={12}>
          <Filter />
        </Grid>
      )}

      {/* <Grid item xs={12}>
        <Sort />
      </Grid> */}
    </Grid>
  );
};

function mapStateToProps(state) {
  // return { noFlights: state.flights.length === 0 };
  return { noFlights: false };
}

export default connect(mapStateToProps)(Actions);
