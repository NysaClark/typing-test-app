import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import {store} from "./store/store";
import "./styles/main.css";

const DOM = document.getElementById("root");
const root = createRoot(DOM);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,  
);
