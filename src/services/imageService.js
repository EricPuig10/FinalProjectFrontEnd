import axios from "../config/axiosConfig"

export const cloudinaryService = {
  getAllImages() {
    const images = axios
      .get(`/cloudinary/images`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return images;
  },

  uploadImage(file) {
    const formData = new FormData();
    formData.append("multipartFile", file);
    const imageToUpload = axios
      .post(`/cloudinary/upload`, formData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {});
    return imageToUpload;
  },

  delete(id) {
    return axios.delete(`/cloudinary/delete/${id}`);
  },
};
