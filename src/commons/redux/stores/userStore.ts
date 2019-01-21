import { User } from "../../models";

export default interface UserStore {
    user: User | undefined;
    fetching: boolean;
    fetched: boolean;
}
