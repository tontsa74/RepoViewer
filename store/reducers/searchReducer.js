import { SET_USERNAME } from "../types";

const initialState = {
  username: '',
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}

export default searchReducer;