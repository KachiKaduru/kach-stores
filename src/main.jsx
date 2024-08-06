import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./_css/main.css";
import { StoreProvider } from "./contexts/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
