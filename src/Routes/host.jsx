import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Host() {
  const [linkStates, setLinkStates] = useState({
    dashboard: true,
    income: false,
    vans: false,
    reviews: false,
  });

  function handleLinkToggle(link) {
    setLinkStates((prev) => {
      const updatedStates = {};
      Object.keys(prev).forEach((key) => {
        updatedStates[key] = key === link;
      });
      return updatedStates;
    });
  }
  return (
    <main className="host-main grow">
      <nav className="host-nav nav_list flex-wrap layout-margin">
        <Link
          className={linkStates.dashboard ? " underline" : "nav_link"}
          to="host"
          onClick={() => handleLinkToggle("dashboard")}
        >
          Dashboard
        </Link>
        <Link
          className={linkStates.income ? " underline" : "nav_link"}
          to="host/income"
          onClick={() => handleLinkToggle("income")}
        >
          Income
        </Link>
        <Link
          className={linkStates.vans ? " underline" : "nav_link"}
          to="host/vans"
          onClick={() => handleLinkToggle("vans")}
        >
          Vans
        </Link>
        <Link
          className={linkStates.reviews ? " underline" : "nav_link"}
          to="host/reviews"
          onClick={() => handleLinkToggle("reviews")}
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </main>
  );
}
