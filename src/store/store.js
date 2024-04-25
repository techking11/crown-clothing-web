import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const middlewares = (store) => (next) => (action) => {
//   if (!action.type) return next(action);
  
//   console.log('type: ' + action.type);
//   console.log('payload: ' + action.payload);
//   console.log('currentState: ' + store.getState());
  
//   next(action);
//   console.log('next state: ' + store.getState());
// };

const persistedConfig = {
  key: 'root',
  storage,
  blackList: ['user'],
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const middlewares = [logger];
const enhanceMiddlewares = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, enhanceMiddlewares);

export const persistor = persistStore(store);
