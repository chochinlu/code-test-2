import { SET_FLIGHTS, GET_FLIGHTS_FAIL } from '../actionTypes';

const initialState = {};

export default function(err = initialState, action) {
  switch (action.type) {
    case SET_FLIGHTS:
      delete err[action.payload.flightType];
      return { ...err };
    case GET_FLIGHTS_FAIL:
      return { ...err, [action.payload.errType]: action.payload.msg };
    default:
      return err;
  }
}
