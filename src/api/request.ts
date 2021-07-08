import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import AdminConfig from "../config";
import { Modal } from "antd";
import { getToken } from "../utils/cookie";
import store from "../store";
import { logout } from "../store/module/user";

export interface ResponseData <T> {
  code: number;
  data: T;
  msg: string;
}

//header
axios.defaults.headers = {
  "Content-Type": "application/json;charset=utf-8",
};
//req url
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "" : AdminConfig.api_url;

//inter req
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

//inter res

axios.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    if (!response.data) {
      return Promise.reject(response);
    }

    // 登录过期或未登录 
    if (response.data.code === AdminConfig.LOGIN_EXPIRE) {
      Modal.confirm({
        title: "系统提示",
        content: response.data.msg,
        okText: "GO LOGIN",
        onOk() {
          // store
          store.dispatch(logout());

        },
        onCancel() { },
      });
      return Promise.reject(new Error(response.data.msg));
    }
    // 请求成功
    if (response.data.code === AdminConfig.SUCCESS_CODE) {
      return response.data as any;  
    }
    return Promise.reject(new Error(response.data.msg));
  },
  (error: AxiosError) => {

    return Promise.reject(error);
  }
);
// 统一发起请求的函数
export function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options);
}
