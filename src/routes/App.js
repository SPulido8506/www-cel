import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Empleados from "../view/Empleados/Empleados";
import EmpleadosAdd from "../view/Empleados/EmpleadosAdd";
import EmpleadosEdit from "../view/Empleados/EmpleadosEdit";
import Usuarios from "../view/Usuarios/Usuarios";
import UsuariosAdd from "../view/Usuarios/UsuariosAdd";
import Layout from "../containers/Layout";
import "../styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/empleados" element={<Empleados />}></Route>
          <Route path="/empleados-add" element={<EmpleadosAdd />}></Route>
          <Route path="/empleados-edit/:id" element={<EmpleadosEdit />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/usuarios-add" element={<UsuariosAdd />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
