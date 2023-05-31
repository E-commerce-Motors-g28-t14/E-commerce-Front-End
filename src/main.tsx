import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledGlobal } from "./styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
