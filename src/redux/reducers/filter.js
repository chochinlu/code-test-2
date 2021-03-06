import { SET_FILTER, RESET_FILTER } from '../actionTypes';
import { cabinFilter, timeFilter } from '../../constants';

const initialState = {
  cabin: cabinFilter.ALL,
  from: '',
  to: '',
  departureTime: timeFilter.ANY_TIME.value,
  arrivalTime: timeFilter.ANY_TIME.value
};

export default function(filters = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return { ...filters, ...action.payload.filter };
    case RESET_FILTER:
      return initialState;
    default:
      return filters;
  }
}
