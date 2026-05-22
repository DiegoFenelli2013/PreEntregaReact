import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/Layout/Layout";
import ItemListContainer from "./componentes/Productos/ItemListContainer/ItemListContainer";
import FormularioContainer from "./componentes/Formulario/FormularioContainer/FormularioContainer";
import Inicio from "./componentes/Inicio/Inicio"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer Mensaje="Nuestros Productos" />} />
        <Route path="/nuevo-producto" element={<FormularioContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
