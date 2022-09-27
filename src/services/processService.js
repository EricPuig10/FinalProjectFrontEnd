import axios from "../config/axiosConfig";

export const processService = {
  getAllProcess() {
    const process = axios.get("/procesos").then((res) => res.data);
    return process;
  },

  getById(id) {
    const process = axios.get("/procesos/" + id).then((res) => res.data);
    return process;
  },
};
