import { get } from "../../config/baseAPI";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { findIndex } from "lodash";

export const SET_HEADLINES = "SET_HEADLINES";
export const SET_NEWS_FEED = "SET_NEWS_FEED";
export const SET_TOTAL_FEED_COUNT = "SET_TOTAL_FEED_COUNT";

const setHeadlines =
  ({ headlinesArray }) =>
  (dispatch) => {
    dispatch({
      type: SET_HEADLINES,
      payload: headlinesArray,
    });
  };

const setNewsFeed =
  ({ articlesArray }) =>
  (dispatch) => {
    dispatch({
      type: SET_NEWS_FEED,
      payload: articlesArray,
    });
  };

const setFeedCount = (count) => (dispatch) => {
  dispatch({
    type: SET_TOTAL_FEED_COUNT,
    payload: count,
  });
};

const loadHeadlines = () => async (dispatch, getState) => {
  let { country } = getState().authReducer;
  let { topics } = getState().topicReducer;

  try {
    const endpoint = `top-headlines?country=${country}`;
    const response = await get({ endpoint });
    if (response.ok) {
      const data = await response.json();
      dispatch(setHeadlines({ headlinesArray: data.articles }));
    }
  } catch (error) {
    Toast.show({
      text1: "Error",
      text2: "Failed to fetch data",
      type: "error",
    });
  }
};

const loadEverything = () => async (dispatch, getState) => {
  let { topics } = getState().topicReducer;
  let { feed } = getState().newsReducer;

  const index = findIndex(topics, (item) => {
    return item.active === true;
  });

  const keyword = topics[index].name;

  const page = Math.abs(feed.length / 20);

  try {
    const endpoint = `everything?q=${keyword}&page=${page + 1}`;
    const response = await get({ endpoint });
    if (response.ok) {
      const data = await response.json();
      dispatch(setNewsFeed({ articlesArray: [...feed, ...data.articles] }));
    }
  } catch (error) {
    Toast.show({
      text1: "Error",
      text2: "Failed to fetch data",
      type: "error",
    });
  }
};

const loadEverythingBySearch =
  ({ searchTerm }) =>
  async (dispatch, getState) => {
    let { feed } = getState().newsReducer;

    const page = Math.abs(feed.length / 20);

    try {
      const endpoint = `everything?q=${searchTerm}&page=${page + 1}`;
      const response = await get({ endpoint });
      if (response.ok) {
        const data = await response.json();
        dispatch(setFeedCount(data.totalResults));
        dispatch(setNewsFeed({ articlesArray: [...feed, ...data.articles] }));
      }
    } catch (error) {
      Toast.show({
        text1: "Error",
        text2: "Failed to fetch data",
        type: "error",
      });
    }
  };

export {
  loadHeadlines,
  loadEverything,
  setNewsFeed,
  loadEverythingBySearch,
  setFeedCount,
};
