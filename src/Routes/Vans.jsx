import VanCard from "./../componentes/vans-page/van-card";
import "../fake-server/vans-data";
import { useState, useEffect } from "react";
export default function VansBody() {
  const [type, setType] = useState({
    simple: false,
    luxury: false,
    rugged: false,
  });
  const [vans, setVans] = useState([1]);
  const [filterdVans, setFilterdVans] = useState(false);
  useEffect(() => {
    fetch("https://vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
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

  function handleTypeClick(type) {
    setType((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  }
  useEffect(() => {
    let trueValues = [];
    let allFalse = true;
    for (const key in type) {
      if (type[key] !== false) {
        allFalse = false;
        trueValues.push(key);
      }
    }

    if (!allFalse) {
      setFilterdVans(vans.filter((van) => trueValues.includes(van.type)));
    } else {
      setFilterdVans(false);
    }
  }, [type]);

  function clearFilter() {
    setType((prev) => {
      const updatedState = { ...prev };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key] = false;
      });
      return updatedState;
    });
  }
  return (
    <main className="vans-main">
      <h1 className="vans-h1">Explore our van options</h1>
      <ul className="flex vans-list flex-wrap">
        <li
          className={`vans-list-element scale hover ${
            type.simple
              ? "dark-orange-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("simple")}
        >
          Simple
        </li>
        <li
          className={`vans-list-element scale hover ${
            type.luxury
              ? "black-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("luxury")}
        >
          luxury
        </li>
        <li
          className={`vans-list-element scale hover ${
            type.rugged
              ? "green-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("rugged")}
        >
          Rugged
        </li>
        <span className="mr-l-40 clear-filter hover" onClick={clearFilter}>
          Clear filter
        </span>
      </ul>
      <div className="vans-grid">
        {vans[0] !== 1 ? (
          filterdVans ? (
            filterdVans.map((van) => (
              <VanCard
                key={van.id}
                id={van.id}
                img={van.imageUrl}
                vanName={van.name}
                price={van.price}
                type={van.type}
              />
            ))
          ) : (
            mapedVans
          )
        ) : (
          <>
            <h2 className="center-position-absolute">loading...</h2>
            <div className="grow"></div>
          </>
        )}
      </div>
    </main>
  );
}
