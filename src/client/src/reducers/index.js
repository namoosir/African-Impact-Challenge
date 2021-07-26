import { combineReducers } from "redux";
import userReducer from "./userReducer";
import settingReducer from "./settingReducer";
import postReducer from "./postReducer";
import moduleReducer from "./moduleReducer";
import profileReducer from "./profileReducer";
import assignmentReducer from "./assignmentReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
  user: userReducer,
  setting: settingReducer,
  post: postReducer,
  module: moduleReducer,
  profile: profileReducer,
  assignment: assignmentReducer,
  event: eventReducer
});
