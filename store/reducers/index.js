import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import reposReducer from './reposReducer';

const allReducers = combineReducers({
    search: searchReducer,
    repos: reposReducer,
});

export default allReducers;
