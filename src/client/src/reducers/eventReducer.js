import { CREATE_EVENT } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case CREATE_EVENT: 
        return {
            ...state
        }
      default:
        return state;
    }
  }
