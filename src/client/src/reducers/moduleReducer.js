import {
  LOAD_MODULE,
  CREATE_MODULE,
  CREATE_MODULE_TRY,
  CANCEL_CREATE_MODULE,
  GET_CLICKED_MODULE,
} from "../actions/types";

const initialState = {
  isCreatingModule: false,
  hasCreatedModule: false,
  modules: {},
  clickedModule: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_MODULE:
      return {
        ...state,
        modules: payload,
      };
    case CREATE_MODULE_TRY:
      return {
        ...state,
        isCreatingModule: true,
        hasCreatedModule: false,
      };
    case CREATE_MODULE:
      return {
        ...state,
        isCreatingModule: false,
        hasCreatedModule: true,
      };
    case CANCEL_CREATE_MODULE:
      return {
        ...state,
        isCreatingModule: false,
      };
    case GET_CLICKED_MODULE:
      return {
        ...state,
        clickedModule: payload,
      };
    default:
      return state;
  }
}
