import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";

const middlewares = [logger].filter(Boolean);

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});