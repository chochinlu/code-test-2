import { combineReducers } from 'redux';
import fetching from './fetching';
import error from './error';
import flights from './flights';
import filter from './filter';
import sort from './order';

export default combineReducers({ fetching, error, flights, filter, sort });
