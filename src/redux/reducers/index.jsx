import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
// import { authReducer } from "./appReducer";
// import { newsReducer } from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer,
//   auth: authReducer,
//   news: newsReducer,
});

export default rootReducer;
