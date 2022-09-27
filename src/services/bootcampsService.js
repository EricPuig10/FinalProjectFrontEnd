import axios from "../config/axiosConfig";

export const bootcampsService = {
  getAllBootcamps() {
    const bootcamps = axios.get("/bootcamps").then((res) => res.data);
    return bootcamps;
  },

  getBootcampById(id) {
    const bootcamp = axios.get("/bootcamps/" + id).then((res) => res.data);
    return bootcamp;
  },

  addBootcamp(data) {
    const bootcamp = axios
      .post("/bootcamps", { ...data, userId: 1 })
      .then((res) => res.data);
    return bootcamp;
  },

  updateBootcamp(bootcamp) {
    const updatedBootcamp = axios
      .put("/bootcamps/" + bootcamp.id, bootcamp)
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
      .delete("/bootcamps/" + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return deletedBootcamp;
  },
};
