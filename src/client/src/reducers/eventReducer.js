import { CREATE_EVENT, CREATE_EVENT_SUCCESSFUL, AFTER_CREATE_EVENT_SUCCESSFUL } from "../actions/types";

const initialState = {
  eventAdd: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
      };
    case CREATE_EVENT_SUCCESSFUL:
      return {
        ...state,
        eventAdd: true,
      };
    case AFTER_CREATE_EVENT_SUCCESSFUL:
      return {
        ...state, 
        eventAdd: false
      }
    default:
      return state;
  }
}
