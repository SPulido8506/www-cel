import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from "../../containers/Layout";
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
    const [estado_c, setestadoc] = useState("");
    const [escolaridad, setescolaridad] = useState("");
    const [nacimiento, setnacimiento] = useState("");    
    const [sexo, setsexo] = useState("");
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
      setFecha_Nac(event.target.value);
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
    <Layout>
    <Content>
     
        <h1>EDITAR INFORMACION DEL EMPLEADO</h1>
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
                value={apPaterno}
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
                value={apMaterno}
                onChange={handleApellidoM}
              />
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
                onChange={handlefechan}
                />
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
                  CASADO
                </MenuItem>
                <MenuItem key="2" value="SOLTERO">
                  SOLTERO
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
                label="Estudios"
                value={escolaridad}
                onChange={handleescolaridad}
                />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Lugar de Nacimiento"
                value={nacimiento}
                onChange={handlenacimiento}
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
                onChange={handlecalle}
                />
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl fullWidth>
            <TextField
                label="Número"
                value={numero}
                onChange={handlenumero}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Colonia"
                value={colonia}
                onChange={handlecolonia}
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
                onChange={handleciudad}
                />
            </FormControl>
          </Grid><Grid item xs={3}>
            <FormControl fullWidth>
            <TextField
                label="Estado"
                value={estado}
                onChange={handleestado}
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
                onChange={handlecurp}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="RFC"
                value={rfc}
                onChange={handlerfc}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Número de Seguro"
                value={nss}
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
                onSelect={departamento}
                onChange={handledepartamento}
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
              <InputLabel id="puestos">Puesto</InputLabel>
              <Select
                labelId="puesto"
                id="puesto"
                name="puesto"
                SelectDisplayProps={puesto}
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
                label="Telefono"
                value={telefono}
                onChange={handletelefono}
                />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
            <TextField
                label="Correo Electronico"
                value={email}
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
                <MenuItem key="ACTIVO" value="ACTIVO">
                  ACTIVO
                </MenuItem>
                <MenuItem key="INACTIVO" value="INACTIVO">
                  INACTIVO
                </MenuItem>
                <MenuItem key="LICENCIA" value="LICENCIA">
                  LICENCIA
                </MenuItem>
              </Select>
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
          <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={handleSubmit}
            >
              GUARDAR CAMBIOS
            </Button>
          <Grid item xs={5}></Grid>
        </Grid>
      
    </Content>
    </Layout>
  );
};
export default EmpleadoEdit;