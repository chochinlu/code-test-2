import { ADD_FLIGHT, SET_FLIGHTS } from '../actionTypes';
import { convertedFligts } from '../../data';
import { getTime } from '../../utils/converters';
import uuid from 'uuid/v4';

// const initialState = [];
const initialState = convertedFligts; // temporary

// regular flight data
// {
//   id, //string
//   cabin, //string
//   from,
//   to,
//   departureTime, // ms
//   arrivalTime // ms
// }

const addFlight = (flights, source) => {
  const newFlight = {
    ...source,
    id: uuid(),
    departureTime: getTime(source.departureTime),
    arrivalTime: getTime(source.arrivalTime)
  };

  return [...flights, newFlight];
};

export default function(flights = initialState, action) {
  switch (action.type) {
    case SET_FLIGHTS:
      return [...flights, ...action.payload.flights];
    case ADD_FLIGHT:
      return addFlight(flights, action.payload.flight);
    default:
      return flights;
  }
}
