import {
  LOAD_ENTREPRENEURS,
  LOAD_ASSIGNMENTS,
  CREATE_ASSIGNMENTS,
  CREATE_ASSIGNMENT_SUCCESSFULLY,
  AFTER_CREATE_ASSIGNMENT,
  GRADING,
  GRADING_SUCCESSFUL,
} from "../actions/types";

const initialState = {
  assignmentCreated: false,
  grading: false,
  assignments: {},
  entrepreneurs: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ENTREPRENEURS:
      return {
        ...state,
        entrepreneurs: payload,
      };
    case CREATE_ASSIGNMENTS:
      return {
        ...state,
      };
    case LOAD_ASSIGNMENTS:
      return {
        ...state,
        assignments: payload,
      };
    case CREATE_ASSIGNMENT_SUCCESSFULLY:
      return {
        ...state,
        assignmentCreated: true,
      };
    case AFTER_CREATE_ASSIGNMENT:
      return {
        ...state,
        assignmentCreated: false,
      };
    case GRADING: 
      return {
        ...state,
        grading: true
      }
    case GRADING_SUCCESSFUL:
      return {
        ...state, 
        grading: false
      }
    default:
      return state;
  }
}
