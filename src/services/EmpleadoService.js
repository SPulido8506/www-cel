import axios from "axios";
const EMPLEADO_API_BASE_URL = "http://localhost:4000/empleados";
class EmpleadoService {
  getEmpleados() {
    return axios.get(EMPLEADO_API_BASE_URL);
  }
  createEmpleado(empleado) {
    return axios.post(EMPLEADO_API_BASE_URL, empleado);
  }
  getEmpleadoById(noempleado) {
    return axios.get(EMPLEADO_API_BASE_URL + "/" + noempleado);
  }
  updateEmpleado(empleado, noempleado) {
    return axios.put(EMPLEADO_API_BASE_URL + "/" + noempleado, empleado);
  }
  deleteEmpleado(noempleado) {
    return axios.delete(EMPLEADO_API_BASE_URL + "/" + noempleado);
  }
}
export default new EmpleadoService();