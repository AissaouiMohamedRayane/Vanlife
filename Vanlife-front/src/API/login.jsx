import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true,
});
export default async function login(credentials) {
  const res = await client.post("api/login", credentials);
  const data = res.data;

  return data;
}
