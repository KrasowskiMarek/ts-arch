import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";

import store from "./commons/redux/stores/store";

// import "./app.scss";

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById("root"),
);
