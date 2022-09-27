import axios from "../config/axiosConfig";

export const categoryService = {
  getAllCategories() {
    const categories = axios.get("/categorias").then((res) => res.data);
    return categories;
  },
  addCategory(data) {
    const categories = axios
      .post(baseURL + "/categories", { ...data, userId: 1 })
      .then((res) => res.data);
    return categories;
  },
};
