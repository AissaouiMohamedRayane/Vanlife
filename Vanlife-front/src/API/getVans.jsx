import client from "./axiosDefault";


export default async function getVans() {
  const res = await client.get("api/vans");
  const data = res.data;
  return data.vans;
}
