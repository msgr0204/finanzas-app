import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importar la función para generar IDs únicos
import { useTransacciones } from "../context/TransaccionesContext";

const Formulario: React.FC = () => {
  const { agregarTransaccion } = useTransacciones();
  const [concepto, setConcepto] = useState<string>("");
  const [monto, setMonto] = useState<number>(0); // Valor mostrado en el input
  const [tipo, setTipo] = useState<"Ingreso" | "Gasto">("Ingreso");


  const manejarEnvio = (evento: React.FormEvent) => {
    evento.preventDefault();

    if (concepto.trim() === "" || monto <= 0) {
      alert("Por favor, ingresa un concepto válido y un monto positivo.");
      return;
    }

    const nuevaTransaccion = {
      id: uuidv4(),
      concepto,
      monto: Number(monto), // Guarda el valor numérico en la transacción
      tipo,
    };
    agregarTransaccion(nuevaTransaccion);

    setConcepto("");
    setMonto(0);
    setTipo("Ingreso");
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="bg-white shadow-lg rounded-lg lg:w-10/12 w-80 mx-auto p-4 my-5 space-y-3"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Agregar Transacción
      </h2>

      <div>
        <label
          htmlFor="concepto"
          className="block text-xl font-medium text-gray-700 mb-1"
        >
          Concepto:
        </label>
        <input
          type="text"
          id="concepto"
          placeholder="Ej. Sueldo"
          value={concepto}
          className="w-full border border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:border-blue-300"
          onChange={(e) => setConcepto(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="monto"
          className="block text-xl font-medium text-gray-700 mb-1"
        >
          Monto:
        </label>
        <input
          type="text" // Tipo texto para permitir caracteres formateados
          id="monto"
          placeholder="Ej. $1,000.00"
          value={monto} // Valor formateado
          className="w-full border border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:border-blue-300"
          onChange={(e) => setMonto(Number(e.target.value))}
        />
      </div>

      <div>
        <label
          htmlFor="tipo"
          className="block text-xl font-medium text-gray-700 mb-1"
        >
          Tipo:
        </label>
        <select
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value as "Ingreso" | "Gasto")}
          className="w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:border-blue-300"
        >
          <option value="Ingreso">Ingreso</option>
          <option value="Gasto">Gasto</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white font-semibold p-1 rounded-md hover:bg-blue-950"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
