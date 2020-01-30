import {
    REQUEST_COMMITS,
    COMMITS_FULFILLED,
    COMMITS_REJECTED,
} from '../types';

const initialState = {
    commits: [],
    loading: false,
    errorMessage: '',
};

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
