import { LOAD_ROOMS } from "../actions/types";

const initialState = {
  videos: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ROOMS:
      return {
        ...state,
        videos: payload,
      };
    default:
      return state;
  }
}
