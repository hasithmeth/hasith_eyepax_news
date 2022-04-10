import { findIndex, map } from "lodash";

export const SET_TOPICS = "SET_TOPICS";

const setSelectedTopic =
  ({ topicID }) =>
  (dispatch, getState) => {
    const { topics } = getState().topicReducer;

    const index = findIndex(topics, (item) => {
      return item.id === topicID;
    });

    let tempArr = topics;

    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i].active = false;
    }

    tempArr[index].active = true;

    dispatch({
      type: SET_TOPICS,
      payload: tempArr,
    });
  };

export { setSelectedTopic };
