import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_PREFIX: string = import.meta.env.VITE_APP_CINEMANIA_API;
const TOKEN: string = import.meta.env.VITE_APP_CINEMANIA_TOKEN;

const headers = {
  accept: "application/json",
  "X-API-KEY": TOKEN,
};

export class API {
  private _APIInstance: AxiosInstance;

  constructor() {
    this._APIInstance = axios.create({
      baseURL: API_PREFIX,
      headers: headers,
    });

    this._APIInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this._APIInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._APIInstance.get<T, R>(url, config);
  }

  public post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._APIInstance.post<T, R>(url, data, config);
  }

  public put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._APIInstance.put<T, R>(url, data, config);
  }

  public delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._APIInstance.delete<T, R>(url, config);
  }

  public APIAccessor() {
    return this._APIInstance;
  }
}

export const APIInstance = new API();
