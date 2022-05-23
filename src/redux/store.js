/**
 *  @description this file is used to configure the reducx store
 */

/**
 * 1- create store                  // done
 * 2- reducer of the store          // done
 * 3- wrap the app with provider
 * 4- actions and thunk
 * 5- useElector and usedispatch
 *
 */

import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
// reducer
import { rootReducer } from "./reducers/rootReducer";
// thunk
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); // take reducer

export default store;
