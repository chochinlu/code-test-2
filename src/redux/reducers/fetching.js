import { FETCHING } from '../actionTypes';
import { cabin } from '../../constants';

const initialState = Object.keys(cabin)
  .map(k => ({ [cabin[k]]: false }))
  .reduce((a, b) => ({ ...a, ...b }), {});

export default function(fetching = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...fetching,
        [action.payload.flightType]: !fetching[action.payload.flightType]
      };
    default:
      return fetching;
  }
}
