import Axios, { InternalAxiosRequestConfig } from "axios";
import { API_URL } from "@/config";
import storage from "@/utils/storage";
import Cookies from "js-cookie";

const setCSRFToken = () =>
  axios.get("http://laravel_api.test/sanctum/csrf-cookie");

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (
    (config.method == "post" ||
      config.method == "put" ||
      config.method == "delete") &&
    !Cookies.get("XSRF-TOKEN")
  ) {
    storage.clearToken();
    await setCSRFToken();
  }
  const token = storage.getToken();

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
