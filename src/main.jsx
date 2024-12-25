import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import AuthContextProvider from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </NextUIProvider>
  </StrictMode>
);
