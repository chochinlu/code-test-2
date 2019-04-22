import {
  GET_FLIGHTS,
  FETCHING,
  GET_FLIGHTS_FAIL,
  SET_FLIGHTS,
  ADD_FLIGHT
} from './actionTypes';

export const getFlights = cabin => ({
  type: GET_FLIGHTS,
  payload: {
    cabin
  }
});

export const fetching = flightType => ({
  type: FETCHING,
  payload: {
    flightType
  }
});

export const getFlightsFail = ({ errType, msg }) => ({
  type: GET_FLIGHTS_FAIL,
  payload: {
    errType,
    msg
  }
});

export const setFlights = ({ flightType, flights }) => ({
  type: SET_FLIGHTS,
  payload: {
    flightType,
    flights
  }
});

export const addFlight = flight => ({
  type: ADD_FLIGHT,
  payload: {
    flight
  }
});
