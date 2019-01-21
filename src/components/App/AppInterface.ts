import { User } from "../../commons/models";

export interface PropsState {
    user: User | undefined;
}

export interface PropsDispatch {
    fetchUser: (id) => void;
}

export interface Props extends PropsState, PropsDispatch {}
