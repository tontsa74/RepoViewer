import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  search: searchReducer,
});

export default allReducers;
