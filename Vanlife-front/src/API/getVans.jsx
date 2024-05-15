export default async function getVans() {
  const res = await fetch("http://127.0.0.1:8000//api/vans");
  console.log(res.status);
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
