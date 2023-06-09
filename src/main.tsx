import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledGlobal } from "./styles";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./contexts";
import { CarsProvider } from "./contexts/carsContext.tsx";
import { UserProvider } from "./contexts/userContext.tsx";
import { FilterProvider } from "./contexts/filterContext.tsx";
import { CommentProvider } from "./contexts/commentsContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <StyledGlobal />
      <ModalProvider>
        <UserProvider>
          <CarsProvider>
            <CommentProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </CommentProvider>
          </CarsProvider>
        </UserProvider>
      </ModalProvider>
    </React.StrictMode>
  </BrowserRouter>
);
