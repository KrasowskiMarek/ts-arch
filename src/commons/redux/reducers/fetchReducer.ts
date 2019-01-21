import { Action, ActionType } from "../actions/action";
import NetworkStatsStore from "../stores/fetchStore";

const initialState: NetworkStatsStore = {
    requestsInProgress: 0,
};

const reducer = (state = initialState, action: Action<ActionType, any>): NetworkStatsStore => {
    const newState = {...state};

    switch (action.type) {
        case "REQUEST_ISSUED":
            newState.requestsInProgress = newState.requestsInProgress + 1;
            break;
        case "REQUEST_COMPLETED":
            newState.requestsInProgress = Math.max(0, newState.requestsInProgress - 1);
            break;
        case "REQUEST_FAILED":
            newState.requestsInProgress = Math.max(0, newState.requestsInProgress - 1);
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;
