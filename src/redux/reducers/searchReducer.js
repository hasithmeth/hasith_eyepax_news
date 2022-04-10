import { SET_SEARCH_TERM } from "../actions/searchActions";

const initialState = {
  searchTerm: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}
