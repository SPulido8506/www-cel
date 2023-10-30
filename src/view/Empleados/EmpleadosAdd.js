import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
// Librerias GRID
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [sexo, setsexo] = useState("");
  const [estadoc, setestadoc] = useState("");
  const [escolaridad, setescolaridad] = useState("");
  const [tipoe, settipoe] = useState("");
  const handleNombre = (event) => {
    this.setNombre(event.target.value);
  };
  const handleApellidoP = (event) => {
    this.setApPaterno(event.target.value);
  };
  const handleApellidoM = (event) => {
    this.setApMaterno(event.target.value);
  };
  const handlefechan = (event) => {
    this.setApMaterno(event.target.value);
  };
  const handlesexo = (event) => {
    this.setsexo(event.target.value);
  };
  const handleestadoc = (event) => {
    this.setestadoc(event.target.value);
  };
  const handleescolaridad = (event) => {
    this.setescolaridad(event.target.value);
  };
  const handletipoe = (event) => {
    this.settipoe(event.target.value);
  };
  const handleSumbit = (event) => {
    const empleados = {
      nombre: this.state.nombre,
      apellidoP: this.state.apellidoP,
      apellidoM: this.state.apellidoM,
      fechan: this.state.fechan,
      sexo: this.state.sexo,
      estadoc: this.state.estadoc,
      escolaridad: this.state.escolaridad,
      cveCarrera: this.state.cveCarrera,
    };
  };
  return (
    <Content>
      <form>
        <h1>ALTA DE EMPLEADOS</h1>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Nombre"
                id="nombre"
                onChange="{handleNombre}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido paterno"
                id="apPaterno"
                onChange="{handleApellidoP}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido materno"
                id="apMaterno"
                onChange="{handleApellidoM}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="sexo">Sexo</InputLabel>
              <Select
                labelId="sexo"
                id="sexo"
                name="sexo"
                onChange="{handlesexo}"
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
                onChange="{handleestadoc}"
              >
                <MenuItem key="C" value="CASADO">
                  MASCULINO
                </MenuItem>
                <MenuItem key="S" value="SOLTERO">
                  FEMENINO
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
                onChange="{handleescolaridad}"
              />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Lugar nacimiento"
                id="nacimiento"
                onChange="{handlenacimiento}"
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
                onChange="{handlecalle}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Número"
                id="numero"
                onChange="{handlenumero}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Colonia"
                id="colonia"
                onChange="{handlecolonia}"
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
                onChange="{handleciudad}"
              />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Estado"
                id="estado"
                onChange="{handleestado}"
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
                onChange="{handlecurp}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="RFC"
                id="rfc"
                onChange="{handlerfc}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="NSS"
                id="nss"
                onChange="{handlenss}"
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
                onChange="{handledepartamento}"
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
                onChange="{handlepuesto}"
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
                id="´telefono"
                onChange="{handletelefono}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Correo electronico"
                id="mail"
                onChange="{handlemail}"
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
                onChange="{handleestatus}"
              >
                <MenuItem key="1" value="Activo">
                  Auxiliar
                </MenuItem>
                <MenuItem key="2" value="Inactivo">
                  Jefe
                </MenuItem>
                <MenuItem key="3" value="Licencia">
                  Gerente
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
                onChange="{handletipoe}"
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
              onClick="{handleSubmit}"
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