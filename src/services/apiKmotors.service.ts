import axios from "axios";

export const apiKmotorsService = axios.create({
  baseURL: "https://kmotors-g28.onrender.com",
  timeout: 30000,
});
