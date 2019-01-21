import { Action, ActionType } from "../actions/action";

import { Alert } from "../../models";

const initialState: Alert[] = [];

const reducer = (state = initialState, action: Action<ActionType, Alert>): Alert[] => {
    const newState = [...state];

    switch (action.type) {
        case "ALERTS_ADD":
            if (action.payload) {
                newState.push(action.payload);
            }
            break;
        case "ALERTS_REMOVE":
            const index = newState.findIndex((a) => !!action.payload && (a.messageCode === action.payload.messageCode));
            newState.splice(index, 1);
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;
