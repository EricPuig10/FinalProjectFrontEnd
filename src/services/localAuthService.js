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

  deleteAuthUser() {
    localStorage.removeItem("auth");
  },

  isLogged() {
    const authJson = localStorage.getItem("auth") ? true : false;
    return authJson;
  },

  isAdmin(){
    if(this.getAuthUser().id === 1) return true;
    return false;
  },


};
