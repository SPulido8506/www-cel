import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import UsuarioService from "../../services/UsuarioService";
import UsuarioEdit from "../Usuarios/UsuariosEdit";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import People from "@mui/icons-material/Book"
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router";
const Usuarios = () => {
  const [usuario, setUsuario] = useState([]);
  // const [id, setId] = useState("");
  const server = `http://localhost:4000`;
  const getData = async () => {
    const { data } = await axios.get(`${server}/usuarios`);
    console.log(data);
    setUsuario(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const DisplayData = usuario.map((info) => {
    return (
      <TableRow
        key={info.idUsuario}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.idUsuario}
        </TableCell>
        <TableCell>{info.nombre}</TableCell>
        <TableCell>{info.email}</TableCell>
        <TableCell>{info.tipoU}</TableCell>
        <TableCell>
          <IconButton aria-label="people">
            <a href={`usuario/${info.idUsuario}`}>
              <People color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`usuarios-edit/${info.idUsuario}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await UsuarioService.deleteUsuario(info.idUsuario);
              await getData();
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <Content>
      <h1>USUARIOS</h1>
      <a href="/usuarios-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar usuario
        </Button>
      </a>
      <h3>Listado de alumnos</h3>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Numero de usuario</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Tipo Usuario</TableCell>
                <TableCell>Consultar</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Content>
  );
};
export default Usuarios;