import axios from "axios";
const USUARIO_API_BASE_URL = "http://localhost:4000/usuarios";
class UsuarioService {
  getUsuarios() {
    return axios.get(USUARIO_API_BASE_URL);
  }
  createUsuario(usuario) {
    return axios.post(USUARIO_API_BASE_URL, usuario);
  }
  getUsuarioById(idusuario) {
    return axios.get(USUARIO_API_BASE_URL + "/" + idusuario);
  }
  updateUsuario(usuario, idusuario) {
    return axios.put(USUARIO_API_BASE_URL + "/" + idusuario, usuario);
  }
  deleteUsuario(idusuario) {
    return axios.delete(USUARIO_API_BASE_URL + "/" + idusuario);
  }
  async getLogin(correo, contrasenia) {
    console.log(correo);
    console.log(contrasenia);
    try {
      const response = await axios.get(`${USUARIO_API_BASE_URL}?filter[where][email]=${correo}&filter[where][contrasenia]=${contrasenia}`);
      const user = response.data;
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new UsuarioService();