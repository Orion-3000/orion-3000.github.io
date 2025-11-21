import React from "react";
import ReactDOM from "react-dom/client"; // 1. Updated import
import "./index.css";
import App from "./App";

// 2. Updated to createRoot API
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);