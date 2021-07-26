import { CREATE_EVENT, CREATE_EVENT_SUCCESSFUL} from "../actions/types";

const initialState = {
  eventAdded: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_EVENT: 
        return {
            ...state,
            eventAdded: true,
        }
      case CREATE_EVENT_SUCCESSFUL: 
        return {
          ...state,
          eventAdded: false
        }
      default:
        return state;
    }
  }
