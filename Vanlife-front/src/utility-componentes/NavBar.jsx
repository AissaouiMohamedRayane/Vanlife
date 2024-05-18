import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { WidthContext } from "../Layout/layout";
import profile from "../assets/profile.svg";
import getUserInfo from "../API/getUserInfo";
import { LoginContext } from "../Layout/layout";

import menu from "../assets/menu.svg";

export default function Navbar() {
  const screenWidth = useContext(WidthContext);

  const [isLoggedIn] = useContext(LoginContext);
  const [profilePic, setProfilePic] = useState(profile);
  useEffect(() => {
    async function handleInfo() {
      try {
        const data = await getUserInfo("image");
        if (data.userImage) {
          setProfilePic(`http://127.0.0.1:8000${data.userImage}`);
        }
      } catch (e) {
        console.log(e);
      }
    }
    handleInfo();
  }, [isLoggedIn]);

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
                ? "gap-15"
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
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline nav_link" : "no-decoration_link nav_link"
              }
              to=""
              onClick={() => handleVansClick()}
            >
              <img src={profilePic} className="profile-pic" alt="" width="50" />
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
