export const formatearAMoneda = (numero: number): string =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
    }).format(numero);
  
  export const limpiarDeMoneda = (valor: string): string =>
    valor.replace(/[^0-9]/g, ""); // Elimina todo excepto números
  