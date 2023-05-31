import axios from "axios";

export const apiFipeService = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 6000,
});
