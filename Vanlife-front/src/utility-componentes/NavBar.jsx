import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { WidthContext } from "../Layout/layout";

import menu from "../assets/menu.svg";

export default function Navbar() {
  const screenWidth = useContext(WidthContext);
  const Cooki = Cookies.get("loggedInUser");
  const login = !!Cooki;

  return (
    <nav
      className={`flex-spacebetween nav ${
        screenWidth > 580
          ? "layout-padding "
          : screenWidth > 335
          ? "layout-padding-mobile"
          : "layout-padding-mobile--s"
      }`}
    >
      <NavLink className={"logo"} to="">
        #VANLIF
      </NavLink>
      <div
        className={`nav-container ${screenWidth > 335 ? "" : "display-none"}`}
      >
        <div
          className={`flex ${
            screenWidth <= 680
              ? screenWidth <= 415
                ? "gap-20"
                : "gap-30"
              : "gap-50"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? " underline nav_link" : "no-decoration_link nav_link"
            }
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline nav_link" : "no-decoration_link nav_link"
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline nav_link" : "no-decoration_link nav_link"
            }
            to="vans"
            onClick={() => handleVansClick()}
          >
            Vans
          </NavLink>
          {login && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline nav_link" : "no-decoration_link nav_link"
              }
              to=""
              onClick={() => handleVansClick()}
            >
              profile
            </NavLink>
          )}
        </div>
      </div>
      <img
        src={menu}
        className={` ${screenWidth > 335 ? "display-none" : ""}`}
        alt=""
      />
    </nav>
  );
}
