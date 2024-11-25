import React from "react";
import { useTransacciones } from "../context/TransaccionesContext";

const ListaTransacciones: React.FC = () => {
  const { transacciones } = useTransacciones(); // Accedemos a las transacciones desde el contexto

  return (
    <div>
      <h2 className="text-lg font-extrabold mb-4 text-center ">Transacciones</h2>
      {transacciones.length === 0 ? (
        <p>No hay transacciones registradas.</p>
      ) : (
        <div className="w-10/12 mx-auto">
          <table className="table-auto border-collapse border border-gray-200 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Concepto</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Monto ($)</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map((transaccion) => (
                <tr key={transaccion.id}>
                  <td className="border border-gray-300 px-4 py-2">{transaccion.concepto}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 text-right ${transaccion.monto >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {transaccion.monto >= 0 ? "+" : ""}
                    {transaccion.monto.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListaTransacciones;
