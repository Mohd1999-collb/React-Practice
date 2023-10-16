import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./component/redux/Store";

createRoot(document.getElementById("root")).render(
    <Provider store={Store}>
        <App/>
    </Provider>
 )