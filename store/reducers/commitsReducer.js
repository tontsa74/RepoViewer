import { REQUEST_COMMITS, COMMITS_FULFILLED, COMMITS_REJECTED } from '../types';

/** Define initial state */
const initialState = {
    commits: [],
    loading: false,
    errorMessage: '',
};

/**
 * Define reducer for state changes
 *
 * @param {*} [state=initialState] initial state object
 * @param {*} action action object
 */
const commitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_COMMITS:
            return {
                ...state,
                loading: action.loading,
            };
        case COMMITS_FULFILLED:
            return {
                ...state,
                commits: action.payload,
                loading: action.loading,
            };
        case COMMITS_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default commitsReducer;
