import api from "../api/axios";

const AuthService = {
  login(credentials) {
    return api.post("/login", credentials);
  },

  user() {
    return api.get("/user");
  },

  logout() {
    return api.post("/logout");
  },
};

export default AuthService;
