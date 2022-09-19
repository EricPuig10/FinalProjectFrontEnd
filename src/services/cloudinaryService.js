import axios from "axios";
import { AuthService } from './AuthService';

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
    const token = AuthService.getAuthUser().token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});


export const cloudinaryService = {

    getAllImages () {
        const images = axios.get(`/cloudinary/images`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: err.response.data.message };
            })
        return images;
    },

    uploadImage(file) {
        const formData = new FormData();
        formData.append('multipartFile', file);
        const imageToUpload = axios.post(`/cloudinary/upload`, formData)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err);
            })
        return imageToUpload;
    },

    delete (id) {
        return axios.delete(`/cloudinary/delete/${id}`)
    }

}