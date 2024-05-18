import client from "./axiosDefault";

export default async function getUserInfo(parm) {
  try {
    const res = await client.get(`api/user?info=${parm}`);
    const data = res.data;
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
}
