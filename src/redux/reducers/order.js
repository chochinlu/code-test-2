import { SET_ORDER } from '../actionTypes';
import { orderType } from '../../constants';

const initialState = {
  orderBy: orderType.CABIN.name,
  order: 'asc'
};

const changeOrder = ori => (ori === 'asc' ? 'desc' : 'asc');

export default function(sort = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return {
        orderBy: action.payload.property,
        order: changeOrder(sort.order)
      };
    default:
      return sort;
  }
}
