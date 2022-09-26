import axios from "../config/axiosConfig"
const baseURL = "http://localhost:8080";

export const bootcampsService = {
  getAllBootcamps() {
    const bootcamps = axios.get(baseURL + "/bootcamps").then((res) => res.data);
    return bootcamps;
  },

  getBootcampById(id) {
    const bootcamp = axios
      .get(baseURL + "/bootcamps/" + id)
      .then((res) => res.data);
    return bootcamp;
  },

  addBootcamp(data) {
    const bootcamp = axios
      .post(baseURL + "/bootcamps", { ...data, userId: 1 })
      .then((res) => res.data);
    return bootcamp;
  },

  updateBootcamp(bootcamp) {
    const updatedBootcamp = axios
      .put(baseURL + "/bootcamps/" + bootcamp.id, bootcamp)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return updatedBootcamp;
  },

  deleteBootcamp(id) {
    const deletedBootcamp = axios
      .delete(baseURL + "/bootcamps/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return deletedBootcamp;
  },
};
