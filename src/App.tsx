import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/formulario";

interface Transaccion {
  concepto: string;
  monto: number;
  tipo: 'Ingreso' | 'Gasto';
}

const App: React.FC = () => {
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

  const agregarTransaccion = (transaccion: Transaccion) => {
    setTransacciones((prev) => [...prev, transaccion]);
  };
  const totalIngresos = transacciones
    .filter((t) => t.tipo === "Ingreso")
    .reduce((acc, t) => acc + t.monto, 0);

  const totalGastos = transacciones
    .filter((t) => t.tipo === "Gasto")
    .reduce((acc, t) => acc + t.monto, 0);

  const saldo = totalIngresos - totalGastos;

  return (
    <div>
      <Header />
      <Formulario onAgregarTransaccion={agregarTransaccion} />
      <h2>Lista de Transacciones</h2>
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((t, index) => (
            <tr key={index}>
              <td>{t.concepto}</td>
              <td>${t.monto}</td>
              <td>{t.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Resumen</h3>
      <p><strong>Ingresos Totales:</strong> ${totalIngresos}</p>
      <p><strong>Gastos Totales:</strong> ${totalGastos}</p>
      <p><strong>Saldo:</strong> ${saldo}</p>
    </div>

  );
};

export default App;
