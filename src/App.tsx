import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaTransacciones from "./components/ListaTransacciones";
import Resultados from "./pages/Resultados";
import { useTransacciones } from "./context/TransaccionesContext";


const App: React.FC = () => {
  const { transacciones, totalIngresos, totalGastos, saldo } = useTransacciones();

  const navigate = useNavigate(); // Esto inicializa el hook

  const irAResultados = () => {
    console.log('si clickea')
    navigate("/resultados");
  };

  return (
    <div>
      <Header />
      <Routes>
        {/* Ruta principal con formulario y lista de transacciones */}
        <Route path="/" element={
          <>
            <Formulario />
            <ListaTransacciones />
          </>
        } />

        {/* Ruta para ver los resultados */}
        <Route
          path="/resultados"
          element={<Resultados/>}
        />
      </Routes>
      <h3>Resumen</h3>
      <p><strong>Ingresos Totales:</strong> ${totalIngresos}</p>
      <p><strong>Gastos Totales:</strong> ${totalGastos}</p>
      <p><strong>Saldo:</strong> ${saldo}</p>
      <button onClick={irAResultados}>Ver Resultados</button>
    </div>

  );
};


export default App;
