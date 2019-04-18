import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import FlightTable from './FlightTable';

const Flight = () => (
  <div>
    <h1>Flight</h1>
    <Filter />
    <Sort />
    <FlightTable />
  </div>
);
export default Flight;
