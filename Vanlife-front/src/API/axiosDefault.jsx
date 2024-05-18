import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error status:", error.response.status);
    console.error("Error data:", error.response.data);

    return Promise.reject(error);
  }
);

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
});

export default client;
