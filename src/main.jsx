import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Ganti render dengan createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
