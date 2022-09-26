import axios from "../config/axiosConfig"

export const candidatsService = {
  getAllCandidats() {
    const candidats = axios
      .get("/candidatos")
      .then((res) => res.data);
    return candidats;
  },

  getCandidatById(id) {
    const candidat = axios
      .get("/candidatos/" + id)
      .then((res) => res.data);
    return candidat;
  },

  getCandidatsByBootcampId(id) {
    const candidatsByBootcamp = axios
      .get("/bootcamps/" + id + "/candidatos")
      .then((res) => res.data);
    return candidatsByBootcamp;
  },

  deleteCandidat(id) {
    const candidat = axios
      .delete("/candidatos/" + id)
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
      .post("/candidatos", { ...data, userId: 1 })
      .then((res) => res.data);
    return candidats;
  },

  updateCandidat(candidat) {
    const updatedCandidat = axios
      .put("/candidatos/" + candidat.id, candidat)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {});
    return updatedCandidat;
  },
  getCandidatsByProcessId(id) {
    const candidatsByProcess = axios
      .get("/procesos/" + id + "/candidatos")
      .then((res) => res.data);
    return candidatsByProcess;
  },
};
