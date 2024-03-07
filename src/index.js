import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/vendors/normalize.css";
import "./sass/main.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/e-commerce-food">
    <App />
  </Router>
);
