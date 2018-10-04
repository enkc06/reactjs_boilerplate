import { combineReducers } from "redux";
import filters from "./filters";
import properties from "./properties";

const rootReducer = combineReducers({
  filters,
  properties
});

export default rootReducer;
