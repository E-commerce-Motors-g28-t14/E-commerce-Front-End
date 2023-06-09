import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledGlobal } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledGlobal />
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>
  </BrowserRouter>
);
