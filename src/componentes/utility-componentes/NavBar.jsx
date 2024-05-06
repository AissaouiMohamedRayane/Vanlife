import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import menu from "../../assets/menu.svg";

export default function Navbar({ setIsPageLoading }) {
  // const [NavLinkStates, setNavLinkStates] = useState({
  //   about: false,
  //   vans: false,
  //   host: false,
  // });
  const [navWidth, setNavWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setNavWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    fetch("http://127.0.0.1:8000/api/users")
    .then(res=>res.json())
    .then(data=>console.log(data))

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVansClick = () => {
    setIsPageLoading(true);
  };

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
    <nav
      className={`flex-spacebetween nav ${
        navWidth > 580 ? "layout-padding" : "layout-padding--mobile"
      }`}
    >
      <NavLink
        className={
          navWidth > 580
            ? "logo"
            : navWidth > 390
            ? "logo--mobile"
            : "logo--mobile--S"
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
            className={({ isActive }) =>
              isActive
                ? `underline ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
                : `nav_link no-decoration_link ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
            }
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `underline ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
                : `nav_link no-decoration_link ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `underline ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
                : `nav_link no-decoration_link ${
                    navWidth > 580
                      ? "nav_NavLink"
                      : navWidth > 390
                      ? "nav_NavLink--mobile"
                      : "nav_NavLink--mobile--S"
                  }`
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
