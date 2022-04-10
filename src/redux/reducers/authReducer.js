import { SET_USER_NAME } from "../actions/authActions";

const initialState = {
  userName: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
}
