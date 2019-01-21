import { Alert, AlertType } from "../../models/Alert";
import store from "../stores/store";

import { Action } from "./action";

function addAlertAction(alert: Alert): Action<"ALERTS_ADD", Alert> {
    return {
        payload: alert,
        type: "ALERTS_ADD",
    };
}

function removeAlertAction(alert: Alert): Action<"ALERTS_REMOVE", Alert> {
    return {
        payload: alert,
        type: "ALERTS_REMOVE",
    };
}

function addAlert(alert: Alert) {
    const timeToHide = alert.time || 5000;

    store.dispatch(addAlertAction(alert));

    setTimeout(
        () => {
            store.dispatch(removeAlertAction(alert));
        },
        timeToHide);
}

export function addAlertSuccess(alert: Alert) {
    addAlert({...alert, type: AlertType.success});
}

export function addAlertError(alert: Alert) {
    addAlert({...alert, type: AlertType.error});
}
