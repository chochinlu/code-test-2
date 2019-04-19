import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddFlightForm from './AddFlightForm';
import Filter from './Filter';
// import Sort from './Sort';

const Actions = ({ classes }) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <AddFlightForm />
    </Grid>
    <Grid item xs={12}>
      <Filter />
    </Grid>
    {/* <Grid item xs={12}>
      <Sort />
    </Grid> */}
  </Grid>
);
export default Actions;
