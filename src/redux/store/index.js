import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import logger from "../middleware/logger";
import rootReducer from "../reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const createStoreWithMW = applyMiddleware(logger, thunk)(createStore)
// const store = createStoreWithMW(rootReducer)

const persistConfig = {
  key: "root",
  storage,
  blacklist: [""]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    middleware
    // other store enhancers if any
  )
);

let persistor = persistStore(store);

export { store, persistor };
