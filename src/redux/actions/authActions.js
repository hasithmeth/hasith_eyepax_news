export const SET_USER_NAME = "SET_USER_NAME";
export const SET_COUNTRY = "SET_COUNTRY";

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

export { setUsername, setCountry };
