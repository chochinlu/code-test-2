import { ADD_FLIGHT, SET_FLIGHTS } from '../actionTypes';

const initialState = [];

export default function(flights = initialState, action) {
  switch (action.type) {
    case SET_FLIGHTS:
      return [...flights, ...action.payload.flights];
    case ADD_FLIGHT:
      return [...flights, action.payload.flight];
    default:
      return flights;
  }
}
