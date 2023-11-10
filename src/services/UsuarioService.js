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
}
export default new UsuarioService();