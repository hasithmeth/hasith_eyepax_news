export const SET_USER_NAME = "SET_USER_NAME";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_LOGIN = "SET_LOGIN";

const setUsername =
  ({ username }) =>
  (dispatch) => {
    dispatch({
      type: SET_USER_NAME,
      payload: username,
    });
  };

const setCountry =
  ({ countryCode }) =>
  (dispatch) => {
    dispatch({
      type: SET_COUNTRY,
      payload: countryCode,
    });
  };

const setLoggedIn = () => (dispatch) => {
  dispatch({
    type: SET_LOGIN,
    payload: true,
  });
};

const setLoggedOut = () => (dispatch) => {
  dispatch({
    type: SET_LOGIN,
    payload: false,
  });
};

export { setUsername, setCountry, setLoggedIn, setLoggedOut };
