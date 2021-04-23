import { combineReducers } from "redux";
import orders from "./orders";
import counter from "./counter";

export default combineReducers({ orders, counter });
