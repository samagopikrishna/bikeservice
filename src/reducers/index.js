import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import dash from "./dash";

export default combineReducers({
  alert,
  auth,
  dash
});
