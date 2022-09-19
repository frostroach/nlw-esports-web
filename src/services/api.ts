import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000";

const request = axios.create({
  baseURL: BASE_URL,
});

const get = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "GET" });

const post = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "POST" });

const put = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "PUT" });

const del = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "DELETE" });

const patch = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "PATCH" });

export { del, get, post, patch, put };
