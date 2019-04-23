import { combineReducers } from 'redux';
import fetching from './fetching';
import error from './error';
import flights from './flights';
import filter from './filter';

export default combineReducers({ fetching, error, flights, filter });
