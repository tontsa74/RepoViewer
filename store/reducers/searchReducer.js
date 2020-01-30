import { SET_USERNAME, SET_BRANCH } from '../types';

const initialState = {
    username: '',
    branch: '',
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
        default:
            return state;
    }
};

export default searchReducer;
