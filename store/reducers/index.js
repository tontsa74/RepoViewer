import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import branchesReducer from './branchesReducer';
import commitsReducer from './commitsReducer';

/** Combine all reducers */
const allReducers = combineReducers({
    search: searchReducer,
    repos: reposReducer,
    branches: branchesReducer,
    commits: commitsReducer,
});

export default allReducers;
