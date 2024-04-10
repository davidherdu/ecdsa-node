import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <a href="https://github.com/davidherdu/ecdsa-node" target={"_blank"}>
      <p style={{ fontSize: "1.4rem", textAlign: "right", color: "#000" }}>
        <b>Source code</b>
      </p>
    </a>

    <h1
      style={{
        color: "red",
        textAlign: "center",
        margin: "0 0 1rem 0",
        padding: 0,
        fontStyle: "italic",
        fontSize: "1.5rem",
      }}
    >
      Do not ever paste your private key on any websites!
      <br />
      <br />
      This is just a mock implementation!
    </h1>

    <App />
  </React.StrictMode>
);
