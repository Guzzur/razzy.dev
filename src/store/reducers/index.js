import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import ui from "./ui";

export default combineReducers({
  ...ui,
  router: connectRouter(history)
});
