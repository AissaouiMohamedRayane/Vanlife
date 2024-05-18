import client from "./axiosDefault";

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
