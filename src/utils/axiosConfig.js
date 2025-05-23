import {axios} from "axios";

const api = axios.create({
  baseURL: "XXXXXXXXXXXXXXXXXXXXX",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
