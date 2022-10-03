import axios from "axios";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const register = (username, email, password, role) => {
  return axios.post(API_URL + "api/auth/signup", {
    username,
    email,
    password,
    role
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "api/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
