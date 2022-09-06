import axios from "axios";

let baseURL = "http://localhost:8080";

export const authService = {
  signin(request) {
    const auth = axios.post(`${baseURL}/auth/signin`, request).then((res) => {
      return res.data;
    });
    return auth;
  },

  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_id");
    localStorage.removeItem("auth");

    window.location = "/login";
  },
};
