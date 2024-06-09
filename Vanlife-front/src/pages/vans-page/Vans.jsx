import VanCard from "../../utility-componentes/van-card";
import { useState, useEffect, useContext } from "react";
import { WidthContext } from "../../Layout/layout";
import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import getVans from "../../API/getVans";

export function loader() {
  return getVans();
}

export default function VansBody() {
  const screenWidth = useContext(WidthContext);
  const [type, setType] = useSearchParams();
  // const [vans, setVans] = useState([]);
  const [filterdVans, setFilterdVans] = useState(["sad"]);
  const [activeButtons, setActivebuttons] = useState({
    type1: type.get("type1") ? true : false,
    type2: type.get("type2") ? true : false,
    type3: type.get("type3") ? true : false,
  });
  const vans = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       console.log("asdsa");
  //       console.log(err);
  //       setErr(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadVans();
  // }, []);

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
        console.log(van.type);
        return (
          <Link
            key={van.id}
            to={`${van.id}`}
            state={{ activeButtons: activeButtons, vans: vans }}
            className='no-decoration black-color hover'
          >
            <VanCard
              id={van.id}
              img={van.image}
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
    <main
      className={`vans-main layout-margin ${
        screenWidth > 580
          ? "layout-margin "
          : screenWidth > 335
          ? "layout-margin-mobile"
          : "layout-margin-mobile--s"
      }`}
    >
      <h1 className='vans-h1'>Explore our van options</h1>
      <ul
        className={`flex vans-list flex-wrap ${
          screenWidth > 400 ? "gap-50" : "gap-20"
        }`}
      >
        <ul
          className={`flex vans-list ${
            screenWidth > 400 ? "gap-50" : "gap-20"
          }`}
        >
          <li
            className={`vans-list-element ${
              screenWidth > 500
                ? "vans-list-element-pd"
                : screenWidth > 400
                ? "vans-list-element-pd--s"
                : "vans-list-element-pd--ss"
            } scale hover ${
              activeButtons.type1
                ? "dark-orange-background white-color"
                : "light-orange-background greay-color"
            }`}
            onClick={() => handleTypeClick("type1", "simple")}
          >
            Simple
          </li>
          <li
            className={`vans-list-element ${
              screenWidth > 500
                ? "vans-list-element-pd"
                : screenWidth > 400
                ? "vans-list-element-pd--s"
                : "vans-list-element-pd--ss"
            } scale hover ${
              activeButtons.type2
                ? "black-background white-color"
                : "light-orange-background greay-color"
            }`}
            onClick={() => handleTypeClick("type2", "luxury")}
          >
            luxury
          </li>
        </ul>
        <ul
          className={`flex vans-list ${
            screenWidth > 400 ? "gap-50" : "gap-20"
          }`}
        >
          <li
            className={`vans-list-element ${
              screenWidth > 500
                ? "vans-list-element-pd"
                : screenWidth > 400
                ? "vans-list-element-pd--s"
                : "vans-list-element-pd--ss"
            } scale hover ${
              activeButtons.type3
                ? "green-background white-color"
                : "light-orange-background greay-color"
            }`}
            onClick={() => handleTypeClick("type3", "rugged")}
          >
            Ruged
          </li>

          <li
            className={`vans-list-element clear-filter ${
              screenWidth > 500
                ? "vans-list-element-pd"
                : screenWidth > 400
                ? "vans-list-element-pd--s"
                : "vans-list-element-pd--ss"
            } hover`}
            onClick={clearFilter}
          >
            Clear filter
          </li>
        </ul>
      </ul>
      <div className={screenWidth > 500 ? "vans-grid " : "vans-grid--mobile"}>
        {loading ? (
          <>
            <h1 className='grow'>loading...</h1>
          </>
        ) : err ? (
          <>
            <h1 className='grow'>{err.message}</h1>
          </>
        ) : (
          mapedVans
        )}
      </div>
    </main>
  );
}
