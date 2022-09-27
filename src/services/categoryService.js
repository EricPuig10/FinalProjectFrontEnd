import axios from "../config/axiosConfig";

export const categoryService = {
  getAllCategories() {
    const categories = axios.get("/categorias").then((res) => res.data);
    return categories;
  },
};
