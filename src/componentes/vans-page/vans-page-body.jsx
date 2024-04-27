import VanCard from "./van-card";
import "../../fake-server/vans-data";
import { useState, useEffect } from "react";
export default function VansBody() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("https://vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(vans);

  const mapedVans = vans.map((van) => {
    return (
      <VanCard
        key={van.id}
        id={van.id}
        img={van.imageUrl}
        vanName={van.name}
        price={van.price}
        type={van.type}
        
      />
    );
  });
  return (
    <main className="vans-main">
      <h1 className="vans-h1">Explore our van options</h1>
      <ul className="flex vans-list">
        <li className="vans-list-element">Simple</li>
        <li className="vans-list-element">luxury</li>
        <li className="vans-list-element">Rugged</li>
        <span className="mr-l-40 clear-filter">Clear filter</span>
      </ul>
      <div className="vans-grid">{mapedVans}</div>
    </main>
  );
}
