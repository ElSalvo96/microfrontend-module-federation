import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Section01 from "./Section01";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("app-body"));
root.render(
  <React.StrictMode>
    <Section01 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
