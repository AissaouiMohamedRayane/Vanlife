import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error:", error);

    return Promise.reject(error);
  }
);

// export default async function getVans() {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("adasdd");
//     const data = res.data;
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }

export default async function getVans() {
  const res = await client.get("api/vans");
  const data = res.data;
  return data.vans;
}
