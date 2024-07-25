import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/Root";
import "./index.css";
import { ToggleProvider } from "./context/DrawerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToggleProvider>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </ToggleProvider>
);
