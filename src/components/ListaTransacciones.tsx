import React from "react";
import { useTransacciones } from "../context/TransaccionesContext";


const ListaTransacciones: React.FC= ( ) => {

    const { transacciones } = useTransacciones(); // Accedemos a las transacciones desde el contexto

  return (
    <div>
      <h2>Transacciones</h2>
      {transacciones.length === 0 ? (
        <p>No hay transacciones registradas.</p>
      ) : (
        <ul>
          {transacciones.map((transaccion) => (
            <li key={transaccion.id}>
              <span>{transaccion.concepto}</span> -{" "}
              <span>
                {transaccion.monto >= 0 ? "+" : ""}
                {transaccion.monto.toFixed(2)} $
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTransacciones;
