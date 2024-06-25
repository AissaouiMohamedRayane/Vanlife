import client from "./axiosDefault";

export default async function register(credentials) {
  const res = await client.post("api/register", credentials);
  const data = res.data;
  return data;
}
