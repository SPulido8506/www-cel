import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/LoginForm"
import Home from "../view/Home";
import Empleados from "../view/Empleados/Empleados";
import EmpleadosAdd from "../view/Empleados/EmpleadosAdd";
import EmpleadosEdit from "../view/Empleados/EmpleadosEdit";
import Empleado from "../view/Empleados/Empleado";
import Usuarios from "../view/Usuarios/Usuarios";
import UsuariosAdd from "../view/Usuarios/UsuariosAdd";
import UsuariosEdit from "../view/Usuarios/UsuariosEdit";
import Usuario from "../view/Usuarios/Usuario";
import Layout from "../containers/Layout";
import "../styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/empleados" element={<Empleados />}></Route>
          <Route path="/empleados-add" element={<EmpleadosAdd />}></Route>
          <Route path="/empleados-edit/:id" element={<EmpleadosEdit />}></Route>
          <Route path="/empleado/:id" element={<Empleado />}></Route>
          <Route path="/usuarios" element={<Usuarios />}></Route>
          <Route path="/usuarios-add" element={<UsuariosAdd />}></Route>
          <Route path="/usuarios-edit/:id" element={<UsuariosEdit />}></Route>
          <Route path="/usuario/:id" element={<Usuario />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
