import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TransaccionesProvider } from "./context/TransaccionesContext"; // Usamos TransaccionesProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Aquí estamos envolviendo nuestra aplicación con el proveedor */}
      <TransaccionesProvider>
        <App />
      </TransaccionesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
