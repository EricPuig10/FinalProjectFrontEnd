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

export const candidatsService = {
  getAllCandidats() {
    const candidats = axios
      .get(baseURL + "/candidatos")
      .then((res) => res.data);
    return candidats;
  },

  getCandidatById(id) {
    const candidat = axios
      .get(baseURL + "/candidatos/" + id)
      .then((res) => res.data);
    return candidat;
  },

  getCandidatsByBootcampId(id) {
    const candidatsByBootcamp = axios
      .get(baseURL + "/bootcamps/" + id + "/candidatos")
      .then((res) => res.data);
    return candidatsByBootcamp;
  },

  deleteCandidat(id) {
    const candidat = axios
      .delete(baseURL + "/candidatos/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return candidat;
  },

  addCandidat(data) {
    const candidats = axios
      .post(baseURL + "/candidatos", { ...data, userId: 1 })
      .then((res) => res.data);
    return candidats;
  },

  updateCandidat(candidat) {
    const updatedCandidat = axios
      .put(baseURL + "/candidatos/" + candidat.id, candidat)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return updatedCandidat;
  },
  getCandidatsByProcessId(id) {
    const candidatsByProcess = axios
      .get(baseURL + "/procesos/" + id + "/candidatos")
      .then((res) => res.data);
    return candidatsByProcess;
  },
};
