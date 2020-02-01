import {
    REQUEST_BRANCHES,
    BRANCHES_FULFILLED,
    BRANCHES_REJECTED,
} from '../types';

/** Define initial state */
const initialState = {
    branches: [],
    loading: false,
    errorMessage: '',
};

/**
 * Define reducer for state changes
 *
 * @param {*} [state=initialState] initial state object
 * @param {*} action action object
 */
const branchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BRANCHES:
            return {
                ...state,
                loading: action.loading,
            };
        case BRANCHES_FULFILLED:
            return {
                ...state,
                branches: action.payload,
                loading: action.loading,
            };
        case BRANCHES_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default branchesReducer;
