import VanListCard from "../utility-componentes/van-list-card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("https://host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);
  const mapedVans = hostVans.map((van) => {
    return (
      <Link key={van.id} to={`/host/vans/${van.id}`} className="no-decoration_link">
        <VanListCard image={van.imageUrl} name={van.name} price={van.price} />
      </Link>
    );
  });
  return (
    <section className="layout-margin">
      <div className="flex-spacebetween">
        <h1 className="Your-listed-vans">Your listed vans</h1>
        <h6 className="dashboard-detail">View All</h6>
      </div>
      {mapedVans}
    </section>
  );
}
