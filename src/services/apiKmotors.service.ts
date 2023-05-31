import axios from "axios";

export const apiKmotorsService = axios.create({
  baseURL: "https://localhost:3000/",
  timeout: 6000,
});
