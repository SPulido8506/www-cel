import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import EmpleadoService from "../../services/EmpleadoService";
const EmpleadoEdit = (id) => {
  const [fecha_ent, setFecha_Ent] = useState("");
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [fecha_nac, setFecha_Nac] = useState("");
  const [sexo, setsexo] = useState("");
  const [estado_c, setestadoc] = useState("");
  const [escolaridad, setescolaridad] = useState("");
  const [nacimiento, setnacimiento] = useState("");
  const [calle, setcalle] = useState("");
  const [numero, setnumero] = useState("");
  const [colonia, setcolonia] = useState("");
  const [ciudad, setciudad] = useState("");
  const [estado, setestado] = useState("");
  const [curp, setcurp] = useState("");
  const [rfc, setrfc] = useState("");
  const [nss, setnss] = useState("");
  const [departamento, setdepartamento] = useState("");
  const [puesto, setpuesto] = useState("");
  const [telefono, settelefono] = useState("");
  const [email, setemail] = useState("");
  const [estatus, setestatus] = useState("");
  const [tipoe, settipoe] = useState("");
  const routeParams = useParams();
  const navigate = useNavigate();
  const server = `http://localhost:4000`;
  const getData = async () => {
    const { data } = await axios.get(`${server}/empleados/${routeParams.id}`);
    setFecha_Ent(data.fecha_ent);
    setNombre(data.nombre);
    setApPaterno(data.apellid_p);
    setApMaterno(data.apellido_m);
    setFecha_Nac(data.fecha_nac);
    setsexo(data.sexo);
    setestadoc(data.estado_c);
    setescolaridad(data.escolaridad);
    setnacimiento(data.lugar_nac);
    setcalle(data.calle);
    setnumero(data.numero);
    setcolonia(data.colonia);
    setciudad(data.ciudad);
    setestado(data.estado);
    setcurp(data.curp);
    setrfc(data.rfc);
    setnss(data.nss);
    setdepartamento(data.departamento);
    setpuesto(data.puesto);
    settelefono(data.telefono);
    setemail(data.mail);
    setestatus(data.estatus);
    settipoe(data.tipo_e);
  };
  useEffect(() => {
    getData();
  }, []);
  const handlefechaen = (event) => {
    setFecha_Ent(event.target.value);
  };
  const handleEstadoc = (event) => {
    setestadoc(event.target.value);
  };
  const handlepuesto = (event) => {
    setpuesto(event.target.value);
  };
  const handleSubmit = () => {
    let empleado = {
      fecha_ent: fecha_ent,
      nombre: nombre,
      apellid_p: apPaterno,
      apellido_m: apMaterno,
      fecha_nac: fecha_nac,
      sexo: sexo,
      estado_c: estado_c,
      escolaridad: escolaridad,
      lugar_nac: nacimiento,
      calle: calle,
      numero: numero,
      colonia: colonia,
      ciudad: ciudad,
      estado: estado,
      curp: curp,
      rfc: rfc,
      nss: nss,
      departamento: departamento,
      puesto: puesto,
      telefono: telefono,
      mail: email,
      estatus: estatus,
      tipo_e: tipoe
    };
    EmpleadoService.updateEmpleado(empleado, routeParams.id);
    navigate("/empleados");
  };
  return (
    <Content>
      <h1>ACTUALIZACION DE EMPLEADOS</h1>
      <label>
        Fecha de entrada:
        <input
          type="text"
          name="fecha_ent"
          value={fecha_ent}
          onChange={handlefechaen}
        />
      </label>
      <label>
        Estado Civil:
        <input
          type="text"
          name="estadoc"
          value={estado_c}
          onChange={handleEstadoc}
        />
      </label>
      <label>
        Puesto:
        <input type="text" name="puesto" value={puesto} onChange={handlepuesto} />
      </label>
      <button onClick={handleSubmit}>Actualizar</button>
    </Content>
  );
};
export default EmpleadoEdit;