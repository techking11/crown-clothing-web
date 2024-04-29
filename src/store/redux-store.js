import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";

export const reduxStore = configureStore({
  reducer: rootReducer
});