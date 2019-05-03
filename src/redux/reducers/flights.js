import { ADD_FLIGHT, SET_FLIGHTS } from '../actionTypes';
import { convertedFligts } from '../../data';

// const initialState = [];
const initialState = convertedFligts; // temporary

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
