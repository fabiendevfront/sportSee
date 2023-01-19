import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.scss";
import App from "./App";

// Rendering the app to the DOM.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);


