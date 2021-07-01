import { LOAD_PROFILE, LOAD_SELF_PROFILE } from "../actions/types";

const initialState = {
  profile: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case LOAD_SELF_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    default:
      return state;
  }
}
