import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { BrowserRouter } from "react-router-dom";

const appAddress = "6692546b5d49d040bf27779e2dcdb02f021d8865";

const provider = new AuthProvider(`${appAddress}`); // required
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProvideAuth provider={provider}>
        <App />
      </ProvideAuth>
    </React.StrictMode>
  </BrowserRouter>
);
