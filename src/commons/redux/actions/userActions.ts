import endpoints from "../../api/endpoints";
import { Action } from "./action";
import { fetchEntity } from "./crudAction";

import { User } from "../../models";

import store from "../stores/store";

function updateUser(user: User): Action<"FETCH_USER_SUCCESS", {}> {
    return {
        payload: user,
        type: "FETCH_USER_SUCCESS",
    };
}

function start(): Action<"FETCH_USER_PENDING", {}> {
    return {
        type: "FETCH_USER_PENDING",
    };
}

function stop(): Action<"FETCH_USER_FULFILLED", {}> {
    return {
        type: "FETCH_USER_FULFILLED",
    };
}

function clear(): Action<"CLEAR_USER", {}> {
    return {
        type: "CLEAR_USER",
    };
}

export function fetchUser(id: number) {
    fetchEntity(User, endpoints.user(id), start, stop, updateUser);
}

export function clearUser() {
    store.dispatch(clear());
}
