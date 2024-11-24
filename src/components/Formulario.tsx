import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importar la función para generar IDs únicos
import { useTransacciones } from "../context/TransaccionesContext";


const Formulario: React.FC = () => {
  const { agregarTransaccion } = useTransacciones();
  const [concepto, setConcepto] = useState<string>("");
  const [monto, setMonto] = useState<number | "">("");
  const [tipo, setTipo] = useState<"Ingreso" | "Gasto">("Ingreso");

  const manejarEnvio = (evento: React.FormEvent) => {
    evento.preventDefault();

    if (concepto.trim() === "" || monto === "" || monto <= 0) {
      alert("Por favor, ingresa un concepto válido y un monto positivo.");
      return;
    }
    const nuevaTransaccion = {
      id: uuidv4(), // Generar un ID único
      concepto,
      monto: Number(monto),
      tipo,
    };
    agregarTransaccion(nuevaTransaccion);

    // Limpia los campos del formulario
    setConcepto("");
    setMonto("");
    setTipo("Ingreso");
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label htmlFor="concepto">Concepto:</label>
        <input
          type="text"
          id="concepto"
          placeholder="Ej. Sueldo"
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="monto">Monto:</label>
        <input
          type="number"
          id="monto"
          placeholder="Ej. 1000"
          value={monto}
          onChange={(e) => setMonto(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value as "Ingreso" | "Gasto")}>
          <option value="Ingreso">Ingreso</option>
          <option value="Gasto">Gasto</option>
        </select>
      </div>
      <div>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default Formulario;
