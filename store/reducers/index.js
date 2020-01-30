import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import branchesReducer from './branchesReducer';

const allReducers = combineReducers({
    search: searchReducer,
    repos: reposReducer,
    branches: branchesReducer,
});

export default allReducers;
