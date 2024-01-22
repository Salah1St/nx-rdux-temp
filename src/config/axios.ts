"use client";
import { getAccessToken, removeAccessToken } from "@/utils/localStroage";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);

    switch (error?.response?.data?.ref) {
      case "TokenExpiredError":
        removeAccessToken();
        window.location.replace("/");
        return Promise.reject(error);
      case "JsonWebTokenError":
        console.log(error);
        removeAccessToken();
        window.location.replace("/");
        break;
      case "NotFoundData":
        removeAccessToken();
        window.location.replace("/");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axios;
