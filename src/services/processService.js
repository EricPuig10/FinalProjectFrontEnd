import axios from "../config/axiosConfig"

const baseURL = "http://localhost:8080";

export const processService = {
  getAllProcess() {
    const process = axios.get(baseURL + "/procesos").then((res) => res.data);
    return process;
  },

  getById(id) {
    const process = axios
      .get(baseURL + "/procesos/" + id)
      .then((res) => res.data);
    return process;
  },
};
