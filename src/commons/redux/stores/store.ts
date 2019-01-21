import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {createLogger} from "redux-logger";

import alertsReducer from "../reducers/alertsReducer";
import fetchReducer from "../reducers/fetchReducer";
import userReducer from "../reducers/userReducer";

import { Alert } from "../../models";
import FetchStore from "./fetchStore";
import UserStore from "./userStore";

const middleware =  applyMiddleware(createLogger());
const reducers = combineReducers({
    alerts: alertsReducer,
    fetch: fetchReducer,
    user: userReducer,
});

export interface ApplicationStore {
    alerts: Alert[];
    fetch: FetchStore;
    user: UserStore;
}

export default createStore(reducers, middleware) as Store<ApplicationStore>;
