import axios from "axios";

const API: string = import.meta.env.VITE_APP_CINEMANIA_API;
const TOKEN: string = import.meta.env.VITE_APP_CINEMANIA_TOKEN;

const APIInstance = axios.create({
  baseURL: API,
  headers: {
    accept: "application/json",
    "X-API-KEY": TOKEN,
  },
});

APIInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      return error;
    }

    if (error instanceof Error) {
      return error;
    }
  }
);

APIInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("config error", error);
  }
);

export default APIInstance;
