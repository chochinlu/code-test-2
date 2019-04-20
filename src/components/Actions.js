import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddFlightForm from './AddFlightForm';
import Filter from './Filter';
// import Sort from './Sort';
import { Route } from 'react-router-dom';

const Actions = ({ classes }) => {
  return (
    <Grid container spacing={8}>
      <Route path="/add_flight" component={AddFlightForm} />

      <Grid item xs={12}>
        <Filter />
      </Grid>
      {/* <Grid item xs={12}>
        <Sort />
      </Grid> */}
    </Grid>
  );
};
export default Actions;
