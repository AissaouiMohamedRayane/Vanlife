import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Host() {
  // const [NavLinkStates, setNavLinkStates] = useState({
  //   dashboard: true,
  //   income: false,
  //   vans: false,
  //   reviews: false,
  // });

  // function handleNavLinkToggle(NavLink) {
  //   setNavLinkStates((prev) => {
  //     const updatedStates = {};
  //     Object.keys(prev).forEach((key) => {
  //       updatedStates[key] = key === NavLink;
  //     });
  //     return updatedStates;
  //   });
  // }
  return (
    <main className="host-main grow">
      <nav className="host-nav flex flex-wrap layout-margin gap-40">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "nav_link no-decoration_link"
          }
          end
          to=""
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "nav_link no-decoration_link"
          }
          
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "nav_link no-decoration_link"
          }
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive ? "underline" : "nav_link no-decoration_link"
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
}
