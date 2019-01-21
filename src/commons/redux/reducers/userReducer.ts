import { Action, ActionType } from "../actions/action";
import UserStore from "../stores/userStore";

const initialState: UserStore = {
    fetched: false,
    fetching: false,
    user: undefined,
};

const reducer = (state = initialState, action: Action<ActionType, any>): UserStore => {
    const newState = {...state};

    switch (action.type) {
        case "FETCH_USER_PENDING":
            newState.fetched = false;
            newState.fetching = true;
            break;
        case "FETCH_USER_FULFILLED":
            newState.fetched = true;
            newState.fetching = false;
            break;
        case "FETCH_USER_SUCCESS":
            newState.user = action.payload;
            break;
        case "CLEAR_USER":
            newState.user = undefined;
            newState.fetched = false;
            break;
        default:
            break;
    }
    return newState;
};

export default reducer;
