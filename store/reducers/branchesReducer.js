import {
    REQUEST_BRANCHES,
    BRANCHES_FULFILLED,
    BRANCHES_REJECTED,
} from '../types';

const initialState = {
    branches: [],
    loading: false,
    errorMessage: '',
};

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
