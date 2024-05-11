import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import menu from "../assets/menu.svg";

export default function Navbar({ setIsPageLoading }) {
  const [navWidth, setNavWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setNavWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVansClick = () => {
    setIsPageLoading(true);
  };


  return (
    <nav
      className={`flex-spacebetween nav ${
        navWidth > 580 ? "layout-padding " : navWidth > 335 ? 'layout-padding-mobile' : 'layout-padding-mobile--s'
      }`}
    >
      <NavLink
        className={
          "logo"
        }
        to=""
      >
        #VANLIF
      </NavLink>
      <div className={`nav-container ${navWidth > 335 ? "" : "display-none"}`}>
        <div
          className={`flex ${
            navWidth <= 680 ? (navWidth <= 415 ? "gap-20" : "gap-30") : "gap-50"
          }`}
        >
          <NavLink
            className={
              ({ isActive }) =>
                isActive ? " underline nav_link" : "no-decoration_link nav_link"
            }
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={
              ({ isActive }) =>
                isActive ? "underline nav_link" : "no-decoration_link nav_link"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={
              ({ isActive }) =>
                isActive ? "underline nav_link" : "no-decoration_link nav_link"
            }
            to="vans"
            onClick={() => handleVansClick()}
          >
            Vans
          </NavLink>
        </div>
      </div>
      <img
        src={menu}
        className={` ${navWidth > 335 ? "display-none" : ""}`}
        alt=""
      />
    </nav>
  );
}
