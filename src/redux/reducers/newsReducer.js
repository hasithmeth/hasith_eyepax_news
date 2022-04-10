import {
  SET_HEADLINES,
  SET_NEWS_FEED,
  SET_TOTAL_FEED_COUNT,
} from "../actions/newsActions";

const initialState = {
  headlines: [],
  feed: [],
  feedCount: 0,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HEADLINES:
      return {
        ...state,
        headlines: action.payload,
      };
    case SET_NEWS_FEED:
      return {
        ...state,
        feed: action.payload,
      };
    case SET_TOTAL_FEED_COUNT:
      return {
        ...state,
        feedCount: action.payload,
      };
    default:
      return state;
  }
}
