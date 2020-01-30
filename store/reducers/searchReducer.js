import { SET_USERNAME, SET_BRANCH, SET_COMMITS_URL } from '../types';

const initialState = {
    username: '',
    branch: '',
    commitsUrl: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_BRANCH:
            return {
                ...state,
                branch: action.payload,
            };
        case SET_COMMITS_URL:
            return {
                ...state,
                commitsUrl: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;
