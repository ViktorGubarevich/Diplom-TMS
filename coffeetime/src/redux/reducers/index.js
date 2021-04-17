import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
// import validate from "./validate";

export default combineReducers({ todos, visibilityFilter });
