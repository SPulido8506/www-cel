import React, { useState, useEffect } from "react";
import Content from "../components/Content2";
import Layout from "../containers/Layout2";
// Librerias GRID
import { styled } from "@mui/material/styles";
import Swal from 'sweetalert2';
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
import UsuarioService from "../services/UsuarioService";
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
const Login = () => {
  const [nombre, setNombre] = useState("");
  const [email, setemail] = useState("");  
  const [contra, setcontra] = useState("");
  const [tipou, settipou] = useState("");   
  const navigate = useNavigate();
  function Error(mensaje) {
    Swal.fire({
        title: '¡Error!',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handlecontra = (event) => {
    setcontra(event.target.value);
  };
  const handleSubmit = async() => {
    const usuario1 = await  UsuarioService.getLogin(email,contra);
    if (usuario1[0] === undefined){
      Error('Correo o contraseña incorrecta')
    }else{
      navigate("/home");
    }
    
  };
  
  return (
    
    <Layout>
      <Content>
        <div>        
        <Grid container spacing={6.288}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={5}></Grid>
          <h2 >INICIO DE SESION</h2>
          <Grid item xs={12}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            
            <FormControl fullWidth>
              <TextField
                fullWidth
                type="email"
                label="Correo Electronico"
                id="email"
                onChange={handleemail}
              />
            </FormControl>
          </Grid>          
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                type="password"
                label="Constraseña"
                id="escolaridad"
                onChange={handlecontra}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid> 
          
          <Grid item xs={4}></Grid>
          <Grid item xs={5.5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
            >
              INICIAR
            </Button>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        
        </div>
        </Content>
    </Layout>
  );
};
export default Login;