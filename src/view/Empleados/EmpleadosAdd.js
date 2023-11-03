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
    this.setFechaen(event.target.value);
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
      fechaent: this.state.fechaent,
      nombre: this.state.nombre,
      apellidoP: this.state.apellidoP,
      apellidoM: this.state.apellidoM,
      fechan: this.state.fechan,
      sexo: this.state.sexo,
      estadoc: this.state.estadoc,
      escolaridad: this.state.escolaridad,
      nacimiento: this.state.nacimiento,
      calle: this.state.calle,
      numero: this.state.numero,
      colonia: this.state.colonia,
      ciudad: this.state.ciudad,
      estado: this.state.estado,
      curp: this.state.curp,
      rfc: this.state.rfc,
      nss: this.state.nss,
      departamento: this.state.departamento,
      puesto: this.state.puesto,
      telefono: this.state.telefono,
      email: this.state.email,
      estatus: this.estate.estatus,
      tipoe: this.estate.tipoe
    };
    console.log(empleados);
    EmpleadoService.createEmpleado(empleados);
  };
  return (
    <Content>
      <form>
        <h1>ALTA DE EMPLEADOS</h1>
        <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <label>Fecha de entrada:</label>
              <DatePicker selected={fechaent}  onChange={setFechaen}/>
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
              <DatePicker selected={fechan} onChange={setfechan}/>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="sexo">Sexo</InputLabel>
              <Select
                labelId="sexo"
                id="sexo"
                name="sexo"
                onSelect={handlesexo}
              >
                <MenuItem key="M" value="MASCULINO">
                  MASCULINO
                </MenuItem>
                <MenuItem key="F" value="FEMENINO">
                  FEMENINO
                </MenuItem>
                <MenuItem key="O" value="OTRO">
                  OTRO
                </MenuItem>
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="estadoc">Estado civil</InputLabel>
              <Select
                labelId="estadoc"
                id="estadoc"
                name="estadoc"
                onSelect={handleestadoc}
              >
                <MenuItem key="C" value="CASADO">
                  Casado
                </MenuItem>
                <MenuItem key="S" value="SOLTERO">
                  Soltero
                </MenuItem>
                <MenuItem key="D" value="DIVORCIADO(A)">
                  DIVORCIADO(A)
                </MenuItem>
                <MenuItem key="U" value="UNION LIBRE">
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
          <Grid itmen xs={5}></Grid>
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
              <InputLabel id="departamento">Departamento</InputLabel>
              <Select
                labelId="departamento"
                id="departamento"
                name="departamento"
                onSelect={handledepartamento}
              >
                <MenuItem key="1" value="Contabilidad">
                  Contabilidad
                </MenuItem>
                <MenuItem key="2" value="Recursos Humanos">
                  Recursos Humanos
                </MenuItem>
                <MenuItem key="3" value="Produccion">
                  Producción
                </MenuItem>
                <MenuItem key="4" value="Calidad">
                  Calidad
                </MenuItem>
                <MenuItem key="5" value="Sistemas">
                  Sistemas
                </MenuItem>
                <MenuItem key="6" value="Almacen">
                  Almacen
                </MenuItem>
                <MenuItem key="7" value="Ventas">
                  Ventas
                </MenuItem>
                <MenuItem key="8" value="Vigilancia">
                 Vigilancia
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="puesto">Puesto</InputLabel>
              <Select
                labelId="puesto"
                id="puesto"
                name="puesto"
                onSelect={handlepuesto}
              >
                <MenuItem key="1" value="Auxiliar">
                  Auxiliar
                </MenuItem>
                <MenuItem key="2" value="Jefe">
                  Jefe
                </MenuItem>
                <MenuItem key="3" value="Gerente">
                  Gerente
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
              <InputLabel id="estatus">Estatus</InputLabel>
              <Select
                labelId="estatus"
                id="estatus"
                name="estatus"
                onSelect={handleestatus}
              >
                <MenuItem key="1" value="Activo">
                  Activo
                </MenuItem>
                <MenuItem key="2" value="Inactivo">
                  Inactivo
                </MenuItem>
                <MenuItem key="3" value="Licencia">
                  Licencia
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>          
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="tipoe">Tipo Empleado</InputLabel>
              <Select
                labelId="tipoe"
                id="tipoe"
                name="tipoe"
                onSelect={handletipoe}
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
      </form>
    </Content>
  );
};
export default EmpleadosAdd;