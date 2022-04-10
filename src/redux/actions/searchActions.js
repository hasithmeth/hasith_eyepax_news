export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

const setSearchTerm =
  ({ searchTerm }) =>
  (dispatch) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: searchTerm,
    });
  };

const clearSearchTerm = () => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TERM,
    payload: "",
  });
};

export { setSearchTerm, clearSearchTerm };
