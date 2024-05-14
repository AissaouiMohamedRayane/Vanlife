export default async function getHostedVans() {
  const res = await fetch("http://127.0.0.1:8000//api/host/my_vans");
  if (!res.ok) {
    throw {
      message: "failed to fetch Vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
