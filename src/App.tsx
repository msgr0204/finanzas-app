import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/formulario";
import ListaTransacciones from "./components/ListaTransacciones";


export interface Transaccion {
  id:string;
  concepto: string;
  monto: number;
  tipo: 'Ingreso' | 'Gasto';
}

const App: React.FC = () => {
  const [transacciones, setTransacciones] = useState<Transaccion[]>(leerDesdeStorage());

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

  // Guardar datos en localStorage cada vez que cambien las transacciones
  useEffect(() => {
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
  }, [transacciones]);

  return (
    <div>
      <Header />
      <Formulario onAgregarTransaccion={agregarTransaccion} />
      <ListaTransacciones Transacciones={transacciones}/>
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
          {transacciones.map((t,index) => (
            <tr key={t.id}>
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

function leerDesdeStorage() {

  // Leer desde localStorage al inicializar
  
  const savedTransactions = localStorage.getItem("transacciones");
  console.log('si entra', savedTransactions)
  return savedTransactions ? JSON.parse(savedTransactions) : [];

}

export default App;
