
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaTransacciones from "./components/ListaTransacciones";
import Resultados from "./pages/Resultados";
import { useTransacciones } from "./context/TransaccionesContext";


const App: React.FC = () => {
  const { totalIngresos, totalGastos, saldo } = useTransacciones();

  const navigate = useNavigate(); // Esto inicializa el hook

  const irAResultados = () => {
    console.log('si clickea')
    navigate("/resultados");
  };

  return (
    <div>
      <Header />
      <Routes>
        {/* Ruta principal con formulario y lista de transacciones */}
        <Route path="/" element={
          <>
            <Formulario />
            <ListaTransacciones />
            <div className="w-10/12 pt-5 mx-auto flex flex-col items-center justify-center">
              <h3 className="font-bold text-xl">Resumen</h3>
              <div className="w-full pt-3">
                <p><strong>Ingresos Totales:</strong> ${totalIngresos}</p>
                <p><strong>Gastos Totales:</strong> ${totalGastos}</p>
                <p><strong>Saldo:</strong> ${saldo}</p>
              </div>

              <button className="w-full bg-blue-900 text-white font-semibold mt-2  mb-10 p-1  rounded-md hover:bg-blue-950" onClick={irAResultados}>Ver Resultados</button>
            </div>

          </>
        } />

        {/* Ruta para ver los resultados */}
        <Route
          path="/resultados"
          element={<Resultados />}
        />
      </Routes>

    </div>

  );
};


export default App;
