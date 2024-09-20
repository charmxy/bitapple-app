import axios from "axios";
import { message } from "antd";

export const HostName = () => {
  let API = "";
  return API;
};

const instance = axios.create({
  timeout: 30 * 1000,
  withCredentials: true // 允许跨域设置cookies
});

export function awaitTo(url: any, options: any) {
  return http(url, options)
    .then(res => res)
    .catch(err => err);
}

export default function http(
  url: string,
  options: {
    data?: {} | undefined;
    params?: {} | undefined;
    headers?: {} | undefined;
    dataType?: "json" | undefined;
    type?: "GET" | undefined;
  }
) {
  const {
    data = {},
    params = {},
    headers = {},
    dataType = "json",
    type = "GET"
  } = options;

  if (!url) {
    console.error("接口地址不能为空");
    return new Promise((_resolve, reject) => {
      reject(null);
    });
  }
  let token = localStorage.getItem("access_token");

  let auth = token && token.length > 0 ? `Bearer ${token}` : "";

  instance.defaults.headers.options = {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: auth,
    ...headers
  };

  return new Promise((resolve, reject) => {
    instance
      .request({
        method: type,
        url: HostName() + url,
        params: params,
        data: data,
        responseType: dataType,
        headers,
        baseURL: ""
      })
      .then(res => {
        if (
          ([200, 201].includes(res?.data.code) && res.data) ||
          res.statusText === "OK"
        ) {
          if (
            res?.data.code == 401 ||
            (res?.data.code == 500 && res?.data.data === "jwt expired")
          ) {
            localStorage.removeItem("access_token");
          } else if (
            res?.data.code == 500 &&
            res?.data.data !== "jwt expired"
          ) {
            return reject(res?.data);
          } else resolve(res.data);
        }
        return reject(res.statusText || "");
      })
      .catch(error => {
        message.error("服务内部错误！");
        if (error.response?.status == 401) {
          localStorage.removeItem("access_token");
        }
        if (!error.response && error.message.indexOf("timeout of ") > -1) {
          return reject("ERROR_NETWORK_TIMEOUT");
        }
        return reject(error.response);
      });
  });
}
