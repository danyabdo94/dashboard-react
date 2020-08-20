import { RECEIVE_API_DATA, AUTHENTICATE } from "../actions";

const initialState = {
  isAuthenticated: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
        },
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        dueAssignemnts: action.data,
      };
    default:
      return state;
  }
}

export default rootReducer;
