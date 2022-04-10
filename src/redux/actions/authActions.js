export const SET_USER_NAME = "SET_USER_NAME";

const setUsername =
  ({ username }) =>
  (dispatch) => {
    dispatch({
      type: SET_USER_NAME,
      payload: username,
    });
  };

export { setUsername };
