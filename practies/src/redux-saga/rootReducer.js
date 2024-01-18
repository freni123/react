import { combineReducers } from "redux";
import productReducer from "./admin/reducer/reducer";

const rootReducers = combineReducers({
  productReducer,
});

export default rootReducers;
