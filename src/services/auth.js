import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const signup = (data) => API.post("/user/signup", data);

export const login = (data) => API.post("/user/login", data);

export default API;