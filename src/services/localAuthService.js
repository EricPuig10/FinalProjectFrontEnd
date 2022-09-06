export const localAuthService = {
  getAuthUser() {
    const authJson = localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : false;
    return JSON.parse(authJson);
  },

  saveAuthUser(authUser) {
    localStorage.setItem("auth", JSON.stringify(authUser));
  },

  isLogged() {
    const authJson = localStorage.getItem("auth") ? true : false;
    return authJson;
  },
};
