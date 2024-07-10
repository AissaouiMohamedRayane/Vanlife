import client from "./axiosDefault";

export default async function getVan(pk) {
  const res = await client.get(`api/van/${pk}`);
  const data = res.data;
  return data;
}
