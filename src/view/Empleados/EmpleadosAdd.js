import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Librerias GRID
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
// LIBRERIAS DE ICONOS
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Layout from "../../containers/Layout";
import Paper from "@mui/material/Paper";
// LIBRERIAS FORMULARIOS
import { useFormControl } from "@mui/material/FormControl";
import EmpleadoService from "../../services/EmpleadoService";
import {
  FormControl,
  FormLabel,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";
import { Form } from "react-router-dom";
const EmpleadosAdd = () => {
  const [fechaent, setFechaen] = useState("");
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [fechan, setfechan]=useState("");
  const [sexo, setsexo] = useState("");
  const [estadoc, setestadoc] = useState("");
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
  const navigate = useNavigate();
  const handlefechaen = (event) => {
    setFechaen(event.target.value);
  };
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleApellidoP = (event) => {
    setApPaterno(event.target.value);
  };
  const handleApellidoM = (event) => {
    setApMaterno(event.target.value);
  };
  const handlefechan = (event) => {
    setfechan(event.target.value);
  };
  const handlesexo = (event) => {
    setsexo(event.target.value);
  };
  const handleestadoc = (event) => {
    setestadoc(event.target.value);
  };
  const handleescolaridad = (event) => {
    setescolaridad(event.target.value);
  };
  const handlenacimiento = (event) => {
    setnacimiento(event.target.value);
  };
  const handlecalle = (event) => {
    setcalle(event.target.value);
  };
  const handlenumero = (event) => {
    setnumero(event.target.value);
  };
  const handlecolonia = (event) => {
    setcolonia(event.target.value);
  };
  const handleciudad = (event) => {
    setciudad(event.target.value);
  };
  const handleestado = (event) => {
    setestado(event.target.value);
  };
  const handlecurp = (event) => {
    setcurp(event.target.value);
  };
  const handlerfc = (event) => {
    setrfc(event.target.value);
  };
  const handlenss = (event) => {
    setnss(event.target.value);
  };
  const handledepartamento = (event) => {
    setdepartamento(event.target.value);
  };
  const handlepuesto = (event) => {
    setpuesto(event.target.value);
  };
  const handletelefono = (event) => {
    settelefono(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handleestatus = (event) => {
    setestatus(event.target.value);
  };
  const handletipoe = (event) => {
    settipoe(event.target.value);
  };
  const handleSubmit = (event) => {
    let empleados = {
      fecha_ent: fechaent,
      nombre: nombre,
      apellid_p: apPaterno,
      apellido_m: apMaterno,
      fecha_nac: fechan,
      sexo: sexo,
      estado_c: estadoc,
      escolaridad: escolaridad,
      lugar_nac: nacimiento,
      calle: calle,
      numero: parseInt(numero),
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
    console.log(empleados);
    EmpleadoService.createEmpleado(empleados);
    navigate("/empleados");
  };
  return (
    <Layout>
    <Content>
     
        <h1>ALTA DE EMPLEADOS</h1>
        <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <label>Fecha de entrada:</label>
              <input
          type="date"
          value={fechaent}
          onChange={handlefechaen}
          
        />
            </FormControl>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Nombre"
                id="nombre"
                onChange={handleNombre}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido paterno"
                id="apPaterno"
                onChange={handleApellidoP}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido materno"
                id="apMaterno"
                onChange={handleApellidoM}
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
          <FormControl fullWidth>
            <label>Fecha de Nacimiento:</label>
              <input type="date" value={fechan} onChange={handlefechan} />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="sexos">Sexo</InputLabel>
              <Select
                labelId="sexo"
                id="sexo"
                name="sexo"
                onChange={handlesexo}
              >
                <MenuItem key="1" value="MASCULINO">
                  MASCULINO
                </MenuItem>
                <MenuItem key="2" value="FEMENINO">
                  FEMENINO
                </MenuItem>
                <MenuItem key="3" value="OTRO">
                  OTRO
                </MenuItem>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="estadoci">Estado civil</InputLabel>
              <Select
                labelId="estadoc"
                id="estadoc"
                name="estadoc"
                onChange={handleestadoc}
              >
                <MenuItem key="1" value="CASADO">
                  Casado
                </MenuItem>
                <MenuItem key="2" value="SOLTERO">
                  Soltero
                </MenuItem>
                <MenuItem key="3" value="DIVORCIADO(A)">
                  DIVORCIADO(A)
                </MenuItem>
                <MenuItem key="4" value="UNION LIBRE">
                  UNION LIBRE
                </MenuItem>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="escolaridad"
                id="escolaridad"
                onChange={handleescolaridad}
              />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Lugar nacimiento"
                id="nacimiento"
                onChange={handlenacimiento}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Calle domicilio"
                id="calle"
                onChange={handlecalle}
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Número"
                id="numero"
                onChange={handlenumero}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Colonia"
                id="colonia"
                onChange={handlecolonia}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Ciudad"
                id="ciudad"
                onChange={handleciudad}
              />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Estado"
                id="estado"
                onChange={handleestado}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Curp"
                id="curp"
                onChange={handlecurp}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="RFC"
                id="rfc"
                onChange={handlerfc}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="NSS"
                id="nss"
                onChange={handlenss}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="departamentos">Departamento</InputLabel>
              <Select
                labelId="departamento"
                id="departamento"
                name="departamento"
                onChange={handledepartamento}
              >
                <MenuItem key="1" value="CONTABILIDAD">
                  CONTABILIDAD
                </MenuItem>
                <MenuItem key="2" value="RECURSOS HUMANOS">
                  RECURSOS HUMANOS
                </MenuItem>
                <MenuItem key="3" value="PRODUCCION">
                  PRODUCCIÓN
                </MenuItem>
                <MenuItem key="4" value="CALIDAD">
                  CALIDAD
                </MenuItem>
                <MenuItem key="5" value="SISTEMAS">
                  SISTEMAS
                </MenuItem>
                <MenuItem key="6" value="ALMACEN">
                  ALMACEN
                </MenuItem>
                <MenuItem key="7" value="VENTAS">
                  VENTAS
                </MenuItem>
                <MenuItem key="8" value="VIGILANCIA">
                 VIGILANCIA
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="puestos">Puesto</InputLabel>
              <Select
                labelId="puesto"
                id="puesto"
                name="puesto"
                onChange={handlepuesto}
              >
                <MenuItem key="1" value="AUXILIAR">
                  AUXILIAR
                </MenuItem>
                <MenuItem key="2" value="JEFE">
                  JEFE
                </MenuItem>
                <MenuItem key="3" value="GERENTE">
                  GERENTE
                </MenuItem>
              </Select>
              </FormControl>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={2}>
              <FormControl fullWidth>
              <TextField
                fullWidth
                label="Telefono(10 díg)"
                id="telefono"
                onChange={handletelefono}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Correo electronico"
                id="mail"
                onChange={handleemail}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="estatu">Estatus</InputLabel>
              <Select
                labelId="estatus"
                id="estatus"
                name="estatus"
                onChange={handleestatus}
              >
                <MenuItem key="1" value="ACTIVO">
                  ACTIVO
                </MenuItem>
                <MenuItem key="2" value="INACTIVO">
                  INACTIVO
                </MenuItem>
                <MenuItem key="3" value="LICENCIA">
                  LICENCIA
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>          
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="tipoem">Tipo Empleado</InputLabel>
              <Select
                labelId="tipoe"
                id="tipoe"
                name="tipoe"
                onChange={handletipoe}
              >
                <MenuItem key="1" value="QUINCENAL">
                  QUINCENAL
                </MenuItem>
                <MenuItem key="2" value="SEMANAL">
                  SEMANAL
                </MenuItem>
                <MenuItem key="3 " value="TEMPORAL">
                  TEMPORAL
                </MenuItem>
                <MenuItem key="4 " value="PRUEBA">
                  PRUEBA
                </MenuItem>
                <MenuItem key="5 " value="DESTAJO">
                  DESTAJO
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      
    </Content>
    </Layout>
  );
};
export default EmpleadosAdd;