import { LOAD_PROFILE, LOAD_SELF_PROFILE, LOAD_SELF_AFTER_EDIT, RELOAD_PROFILE  } from "../actions/types";

const initialState = {
  toReload: false,
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
    case LOAD_SELF_AFTER_EDIT: 
      return  {
        ...state,
        profile: payload,
        toReload: true
      }
    case RELOAD_PROFILE:
      return {
        ...state,
        toReload: false
      }

    default:
      return state;
  }
}
