import { SET_USER_NAME, SET_COUNTRY, SET_LOGIN } from "../actions/authActions";

const initialState = {
  isLoggedIn: false,
  userName: "",
  country: "us",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
