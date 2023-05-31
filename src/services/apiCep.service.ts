import axios from "axios";

export const apiCepService = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 6000,
});

// Colocar CEP/formato(json)/: 01001000/json
