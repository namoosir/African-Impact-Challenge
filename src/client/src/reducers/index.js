import { combineReducers } from "redux";
import userReducer from "./userReducer";
import settingReducer from "./settingReducer";
import postReducer from "./postReducer"


import profileReducer from "./profileReducer"



export default combineReducers({
  user: userReducer,
  setting: settingReducer,


  post: postReducer,
  profile: profileReducer

});