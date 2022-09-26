import axios from "../config/axiosConfig"

const baseURL = "http://localhost:8080";

export const categoryService = {
  getAllCategories() {
    const categories = axios
      .get(baseURL + "/categorias")
      .then((res) => res.data);
    return categories;
  },
};
