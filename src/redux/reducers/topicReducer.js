import { SET_TOPICS } from "../actions/topicActions";

const initialState = {
  topics: [
    {
      id: 1,
      name: "Health",
      active: false,
    },
    {
      id: 2,
      name: "Technology",
      active: false,
    },
    {
      id: 3,
      name: "Finance",
      active: false,
    },
    {
      id: 4,
      name: "Arts",
      active: false,
    },
    {
      id: 5,
      name: "Sports",
      active: false,
    },
  ],
};

export default function topicReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
}
