import {addAlertError} from "../redux/actions/alertsActions";
import {requestCompleted, requestIssued} from "../redux/actions/fetchActions";
import store from "../redux/stores/store";

const DEFAULT_OPTIONS = {
    headers: {
        "Accept": "application/json",
        "Authorization": "",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
};

const http = (endpoint: string, method = "get", options?: any, silence?: boolean) => {
    let body = {};
    const params = "";
    const defaultOptions = {...DEFAULT_OPTIONS};

    switch (method) {
        case "get":
            // const esc = encodeURIComponent;
            // params += Object.keys(options)
            //     .map((k) => esc(k) + "=" + esc(typeof options[k] !== "undefined" ? options[k] : ""))
            //     .join("&");
            break;
        case "file":
            delete defaultOptions.headers["Content-Type"];
            body = {body: options};
            method = "post";
            break;
        default:
            body = {
                body: JSON.stringify(options),
            };
            break;
    }

    return new Promise((resolve, reject) => {
        if (silence) { store.dispatch(requestIssued()); }
        fetch(endpoint + (params ? "?" + params : ""), {credentials: "same-origin", ...defaultOptions, ...{method}, ...body})
            .then(handleResponse)
            .then((data) => {
                if (silence) { store.dispatch(requestCompleted()); }
                resolve(data);
            })
            .catch((error) => {
                if (silence) { store.dispatch(requestCompleted()); }
                addAlertError({...error, message: error.err ? error.err : undefined});
                reject(error);
            });
    });
};

const handleResponse = (response) => {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return handleJSONResponse(response);
    } else if (contentType && contentType.includes("text/html")) {
        return handleTextResponse(response);
    } else {
        return handleTextResponse(response);
    }
};

const handleJSONResponse = (response) => {
    if (response.status === 202 || response.status === 204) {
        return "";
    } else {
        return response.json()
            .then((json) => {
                if (response.ok || json.success) {
                    return json;
                } else {
                    return Promise.reject({
                        ...json,
                        status: response.status,
                        statusText: response.statusText,
                    });
                }
            });
    }
};

const handleTextResponse = (response) => {
    return response.text()
        .then((text) => {
            if (response.ok) {
                return text;
            } else {
                return Promise.reject({
                    err: text,
                    status: response.status,
                    statusText: response.statusText,
                });
            }
        });
};

export default http;
