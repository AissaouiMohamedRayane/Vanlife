import VanCard from "./../componentes/vans-page/van-card";
import "../fake-server/vans-data";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
export default function VansBody() {
  const [type, setType] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [filterdVans, setFilterdVans] = useState(["sad"]);
  const [activeButtons, setActivebuttons] = useState({
    type1: type.get("type1") ? true : false,
    type2: type.get("type2") ? true : false,
    type3: type.get("type3") ? true : false,
  });
  useEffect(() => {
    fetch("https://vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  useEffect(() => {
    setActivebuttons({
      type1: type.get("type1") ? true : false,
      type2: type.get("type2") ? true : false,
      type3: type.get("type3") ? true : false,
    });
  }, [type]);

  const hasAnyParameters = type.toString().trim() !== "";
  useEffect(() => {
    setFilterdVans(
      hasAnyParameters
        ? vans.filter(
            (van) =>
              van.type === type.get("type1") ||
              van.type === type.get("type2") ||
              van.type === type.get("type3")
          )
        : vans
    );
  }, [vans, type]);
  const mapedVans = filterdVans
    ? filterdVans.map((van) => {
        return (
          <Link
            to={van.id}
            key={van.id}
            state={activeButtons}
            className="no-decoration black-color hover"
          >
            <VanCard
              id={van.id}
              img={van.imageUrl}
              vanName={van.name}
              price={van.price}
              type={van.type}
            />
          </Link>
        );
      })
    : null;
  function handleTypeClick(key, value) {
    setActivebuttons((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
    setType((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newParams.get(key)) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  }

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
            activeButtons.type1
              ? "dark-orange-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("type1", "simple")}
        >
          Simple
        </li>
        <li
          className={`vans-list-element scale hover ${
            activeButtons.type2
              ? "black-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("type2", "luxury")}
        >
          luxury
        </li>
        <li
          className={`vans-list-element scale hover ${
            activeButtons.type3
              ? "green-background white-color"
              : "light-orange-background greay-color"
          }`}
          onClick={() => handleTypeClick("type3", "rugged")}
        >
          Rugged
        </li>
        <span className="mr-l-40 clear-filter hover" onClick={clearFilter}>
          Clear filter
        </span>
      </ul>
      <div className="vans-grid">
        {vans[0] !== 1 ? (
          mapedVans
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
