import client from "./axiosDefault";
export default async function logOut() {
  const res = await client("api/logout");
  return res.data;
}
