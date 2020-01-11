import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import {persistStore} from "redux-persist";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middlewares = [];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);