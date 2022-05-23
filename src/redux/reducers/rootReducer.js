/**
 * @description this reducer is used to combine the app reducers in one root reducer
 */
import { combineReducers } from "redux";
// reducers
import { imageThumbReducer } from "./imageThumbReducer";
import { nasaMediaReducer } from "./nasaMediaReducer";
export const rootReducer = combineReducers({
  nasaMediaReducer: nasaMediaReducer,
  imageThumbReducer: imageThumbReducer,
});
