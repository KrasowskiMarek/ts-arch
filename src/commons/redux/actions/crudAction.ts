import { parse, parseArray, RefType } from "sparkson";

import http from "../../api/http";
import { addAlertSuccess } from "./alertsActions";
import { requestFailed } from "./fetchActions";

import { Alert } from "../../models";

import store from "../stores/store";

export function fetchEntities<T>(cls: RefType<T>, endpoint: string, start: () => any, stop: () => any, callback?: (d: T[]) => any, showLoader?: boolean) {
    store.dispatch(start());
    http(endpoint, "get", null, !showLoader)
        .then((json) => {
            if (callback) {
                store.dispatch(callback(parseArray(cls, json)));
            }
            store.dispatch(stop());
        })
        .catch((error) => {
            store.dispatch(requestFailed(`Fetch entities error - ${endpoint}`, error));
            store.dispatch(stop());
        });
}

export function fetchEntity<T>(cls: RefType<T>, endpoint: string, start: () => any, stop: () => any, callback?: (d: T) => any) {
    store.dispatch(start());
    http(endpoint, "get")
        .then((json) => {
            console.warn(callback);
            if (callback) {
                store.dispatch(callback(parse(cls, json)));
            }
            store.dispatch(stop());
        })
        .catch((error) => {
            console.warn(error);
            store.dispatch(requestFailed(`Fetch entity error - ${endpoint}`, error));
            store.dispatch(stop());
        });
}

export function createEntity<T>(cls: RefType<T>, body: T, endpoint: string, start: () => any, stop: () => any, msg?: Alert) {
    store.dispatch(start());
    return http(endpoint, "post", body)
        .then((json) => {
            addAlertSuccess(msg || {messageId: "dictionary.addSuccess", injected: ""});
            store.dispatch(stop());
            return json;
        })
        .catch((error) => {
            store.dispatch(requestFailed(`Create entity error - ${endpoint}`, error));
            store.dispatch(stop());
        });
}

export function updateEntity<T>(cls: RefType<T>, body: T, endpoint: string, start: () => any, stop: () => any, callback?: (d: T) => any, msg?: Alert) {
    store.dispatch(start());
    return http(endpoint, "put", body)
        .then((json) => {
            addAlertSuccess(msg || {messageId: "dictionary.updateSuccess", injected: ""});
            if (callback) {
                store.dispatch(callback(parse(cls, json)));
            }
            store.dispatch(stop());
        })
        .catch((error) => {
            store.dispatch(requestFailed(`Update entity error - ${endpoint}`, error));
            store.dispatch(stop());
        });
}

export function deleteEntity<T>(cls: RefType<T>, body: T, endpoint: string, start: () => any, stop: () => any, callback?: () => any, msg?: Alert) {
    store.dispatch(start());
    return new Promise((resolve, reject) =>
        http(endpoint, "delete")
            .then(() => {
                addAlertSuccess(msg || {messageId: "dictionary.deleteSuccess", injected: ""});
                if (callback) {
                    callback();
                }
                store.dispatch(stop());
                resolve(true);
            })
            .catch((error) => {
                store.dispatch(requestFailed(`Delete entity error - ${endpoint}`, error));
                store.dispatch(stop());
                reject(error);
            }),
    );
}
