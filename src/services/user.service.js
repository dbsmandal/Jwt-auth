import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://dreamlearn-capstone.herokuapp.com/";

const getPublicContent = () => {
  return axios.get(API_URL + "api/test/all");
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

const getLearnerBoard = () => {
  return axios.get(API_URL + "api/authorise/learner", { headers: authHeader() });
};

const getEducatorBoard = () => {
  return axios.get(API_URL + "api/authorise/educator", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getLearnerBoard,
  getEducatorBoard,
};

export default UserService;
