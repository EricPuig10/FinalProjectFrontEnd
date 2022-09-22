import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

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
