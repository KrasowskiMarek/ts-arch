import { connect } from "react-redux";

import { fetchUser } from "../../commons/redux/actions/userActions";
import { ApplicationStore } from "../../commons/redux/stores/store";

import { default as Component } from "./AppComponent";
import { Props } from "./AppInterface";

export function mapStateToProps({ user }: ApplicationStore): Props {
    return {
        user: user.user,

        fetchUser,
    };
}

export default connect(mapStateToProps)(Component);
