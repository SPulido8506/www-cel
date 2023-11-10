import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import EmpleadoService from "../../services/EmpleadoService";
import Grid from "@mui/material/Grid";
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
     
        <h1>INFORMACION DEL EMPLEADO</h1>
        <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                label="Fecha de Entrada"
                value={fecha_ent}
                InputProps={{ readOnly: true }}
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
                value={nombre}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido paterno"
                id="apPaterno"
                value={apPaterno}
                InputProps={{ readOnly: true }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                label="Apellido materno"
                id="apMaterno"
                value={apMaterno}
                InputProps={{ readOnly: true }}
              />{" "}
            </FormControl>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
          <FormControl fullWidth>
                <TextField
                label="Fecha de Nacimiento"
                value={fecha_nac}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Sexo"
                value={sexo}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Estado Civil"
                value={estado_c}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Estudios"
                value={escolaridad}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Lugar de Nacimiento"
                value={nacimiento}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Calle Domicilio"
                value={calle}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
            <TextField
                label="Número"
                value={numero}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Colonia"
                value={colonia}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Ciudad"
                value={ciudad}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Estado"
                value={estado}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="curp"
                value={curp}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="RFC"
                value={rfc}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Número de Seguro"
                value={nss}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Departamento"
                value={departamento}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Puesto"
                value={puesto}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Telefono"
                value={telefono}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Correo Electronico"
                value={email}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Estatus"
                value={estatus}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>          
          <Grid item xs={4}>
            <FormControl fullWidth>
            <TextField
                label="Tipo de Empleado"
                value={tipoe}
                InputProps={{ readOnly: true }}
                />
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={5}></Grid>
          
          <Grid item xs={5}></Grid>
        </Grid>
      
    </Content>
  );
};
export default EmpleadoEdit;