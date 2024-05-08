import {
  compose,
  createStore,
  applyMiddleware,
  Middleware
} from "redux";

import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

import {
  persistStore,
  persistReducer,
  PersistConfig
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX__DEVTOOLS__EXTENSION__COMPOSE?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistedConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE) ||
  compose;

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk
].filter((middleware): middleware is Middleware => Boolean());

const enhanceMiddlewares = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  enhanceMiddlewares
);

export const persistor = persistStore(store);
