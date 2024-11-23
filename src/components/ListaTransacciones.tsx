import React from "react";
import {Transaccion}from'../App'

interface TransaccionListProps {
  Transacciones: Transaccion[];
}

const ListaTransacciones: React.FC<TransaccionListProps> = ({ Transacciones }) => {
  return (
    <div>
      <h2>Transacciones</h2>
      {Transacciones.length === 0 ? (
        <p>No hay transacciones registradas.</p>
      ) : (
        <ul>
          {Transacciones.map((transaccion, index) => (
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
