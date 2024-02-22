import axios from "axios";
import Toast from "element-ui";

// 創建實例
const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log(error)
    console.error("請求錯誤攔截器:", error);
    Toast.fail(error.response.data.message);
    return Promise.reject(error);
  }
);

// 導出實例
export default instance;
