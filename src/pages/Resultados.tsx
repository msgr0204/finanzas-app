
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTransacciones } from "../context/TransaccionesContext";

// Registra los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Resultados: React.FC = () => {
  const { totalIngresos, totalGastos, saldo } = useTransacciones();

  // Datos para la gráfica
  const data = {
    labels: ["Ingresos", "Gastos", "Saldo"],
    datasets: [
      {
        data: [totalIngresos, totalGastos, saldo],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"], // Colores para la gráfica
      },
    ],
  };

  return (
    <div>
      <h1>Resultados</h1>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Resultados;
