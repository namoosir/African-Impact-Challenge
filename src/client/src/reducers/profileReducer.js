import {
    LOAD_PROFILE
} from "../actions/types";

const initialState = {
    profile: {},
    specificProfile: {}
  };

  export default function(state = initialState, action) {
    const{type, payload} = action;
    switch (type) {
      case LOAD_PROFILE:
        return {
          ...state,
          profile: payload
        };
      default:
        return state;
    }
  }