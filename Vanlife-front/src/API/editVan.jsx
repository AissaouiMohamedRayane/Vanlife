import client from "./axiosDefault";

export default async function editApi(credentials, id) {
  console.log(credentials.id);
  const res = await client.put(
    `api/host/modify_van/${id}`,
    credentials
  );
  const data = res.data;
  return data;
}
