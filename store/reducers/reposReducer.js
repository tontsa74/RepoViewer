import { REQUEST_REPOS, REPOS_FULFILLED, REPOS_REJECTED } from '../types';

/** Define initial state */
const initialState = {
    repos: [],
    loading: false,
    errorMessage: '',
};

/**
 * Define reducer for state changes
 *
 * @param {*} [state=initialState] initial state object
 * @param {*} action action object
 */
const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return {
                ...state,
                loading: action.loading,
            };
        case REPOS_FULFILLED:
            return {
                ...state,
                repos: action.payload,
                loading: action.loading,
            };
        case REPOS_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default reposReducer;
