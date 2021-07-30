import { CREATE_EVENT, CREATE_EVENT_SUCCESSFUL} from "../actions/types";

const initialState = {
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_EVENT: 
        return {
            ...state,
        }
      case CREATE_EVENT_SUCCESSFUL: 
        return {
          ...state,
        }
      default:
        return state;
    }
  }
