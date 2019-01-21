import * as React from "react";

import { Props, PropsDispatch } from "./AppInterface";

export default class AppComponent extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    public componentWillMount() {
        this.props.fetchUser(1);
    }

    public render() {
        return (
            <div>
                aaa
            </div>
        );
    }
}
