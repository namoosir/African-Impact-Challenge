import { combineReducers } from "redux";
import userReducer from "./userReducer";
import settingReducer from "./settingReducer";

export default combineReducers({
  user: userReducer,
  setting: settingReducer
});