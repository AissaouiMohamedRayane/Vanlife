export default async function getHostedVans() {
  const res = await fetch("https://host/vans");
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
