import client from "./axiosDefault";

export default async function login(credentials) {
  const res = await client.post("api/login", credentials);
  const data = res.data;

  return data;
}
