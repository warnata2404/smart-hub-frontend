import api from "../api/axios";

const AuthService = {
  login(credentials) {
    return api.post("/login", credentials);
  },

  logout() {
    return api.post("/logout");
  },

  getCurrentUser() {
    return api.get("/user");
  },
};

export default AuthService;
