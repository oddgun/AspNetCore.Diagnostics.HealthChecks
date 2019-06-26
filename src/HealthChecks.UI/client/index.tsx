import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './App';
import { HashRouter } from "react-router-dom";

declare var uiEndpoint: any;
declare var webhookEndpoint: any

let endpoint = `${window.location.origin}${uiEndpoint}`;

ReactDOM.render(
    <HashRouter>
        <App apiEndpoint={uiEndpoint}
            webhookEndpoint={webhookEndpoint}
        />
    </HashRouter>, document.getElementById("app"));