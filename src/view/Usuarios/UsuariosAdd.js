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
const UsuarioAdd = () => {
  const [nombre, setNombre] = useState("");
  const [apPaterno, setApPaterno] = useState("");
  const [apMaterno, setApMaterno] = useState("");
  const [cveCarrera, setCveCarrera] = useState("");
  const handleNombre = (event) => {
    this.setNombre(event.target.value);
  };
  const handleApellidoP = (event) => {
    this.setApPaterno(event.target.value);
  };
  const handleApellidoM = (event) => {
    this.setApMaterno(event.target.value);
  };
  const handleCarrera = (event) => {
    this.setCveCarrera(event.target.value);
  };
  const handleSumbit = (event) => {
    const maestro = {
      nombre: this.state.nombre,
      apellidoP: this.state.apellidoP,
      apellidoM: this.state.apellidoM,
      cveCarrera: this.state.cveCarrera,
    };
  };
  return (
    <Content>
      <form>
        <h1>ALTA DE USUARIOS</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Nombre"
                id="nombre"
                onChange="{handleNombre}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Correo"
                id="correo"
                onChange="{handlecorreo}"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Contraseña"
                id="contrasenia"
                onChange="{handlecontrasenia}"
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="estatus">Estatus</InputLabel>
              <Select
                labelId="estatus"
                id="estatus"
                name="estatus"
                onSelect="{handleestatus}"
              >
                <MenuItem key="1" value="Activo">
                  Activo
                </MenuItem>
                <MenuItem key="2" value="Inactivo">
                  Inactivo
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={3}>
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
export default UsuarioAdd;