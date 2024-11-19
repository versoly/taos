import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// eslint-disable-next-line
const root = createRoot(document.getElementById("app"));
root.render(React.createElement(App));
