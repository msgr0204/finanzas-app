import React, { createContext, useContext, useState, useEffect } from "react";

export interface Transaccion {
  id: string;
  concepto: string;
  monto: number;
  tipo: "Ingreso" | "Gasto";
}

interface TransaccionesContextProps {
  transacciones: Transaccion[];
  agregarTransaccion: (transaccion: Transaccion) => void;
  totalIngresos: number;
  totalGastos: number;
  saldo: number;
}

const TransaccionesContext = createContext<TransaccionesContextProps | undefined>(undefined);

export const TransaccionesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  useEffect(() => {
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
  }, [transacciones]);

  return (
    <TransaccionesContext.Provider
      value={{ transacciones, agregarTransaccion, totalIngresos, totalGastos, saldo }}
    >
      {children}
    </TransaccionesContext.Provider>
  );
};

function leerDesdeStorage(): Transaccion[] {
  const savedTransactions = localStorage.getItem("transacciones");
  return savedTransactions ? JSON.parse(savedTransactions) : [];
}

export const useTransacciones = (): TransaccionesContextProps => {
  const context = useContext(TransaccionesContext);
  if (!context) {
    throw new Error("useTransacciones debe usarse dentro de un TransaccionesProvider");
  }
  return context;
};

