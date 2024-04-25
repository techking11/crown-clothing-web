import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configDotenv } from "dotenv";

const persistedConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

// process.env.NODE_ENV !== "production
const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE) ||
  compose;

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
const enhanceMiddlewares = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  enhanceMiddlewares
);

export const persistor = persistStore(store);
