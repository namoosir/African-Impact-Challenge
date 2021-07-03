import { combineReducers } from "redux";
import userReducer from "./userReducer";
import settingReducer from "./settingReducer";
import postReducer from "./postReducer"
import moduleReducer from "./moduleReducer";
import profileReducer from "./profileReducer"

export default combineReducers({
  user: userReducer,
  setting: settingReducer,
  post: postReducer,
  module: moduleReducer,
  profile: profileReducer
});