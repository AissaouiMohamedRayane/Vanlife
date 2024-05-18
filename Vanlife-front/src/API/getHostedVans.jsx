import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true, // Ensure cookies are included
});
export default async function getHostedVans() {
  try {
    const res = await client.get("api/host/my_vans");
    const data = res.data;
    return data.vans;
  } catch (error) {
    console.error("Error fetching hosted vans:", error);
    throw error;
  }
}
