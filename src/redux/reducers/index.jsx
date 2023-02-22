import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
import newsReducer from "./newsReducer";
// import { authReducer } from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  news: newsReducer,
  //   auth: authReducer,
});

export default rootReducer;
