import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [linkStates, setLinkStates] = useState({
    about: false,
    vans: false,
    host: false,
  });
  const [displayNone, setDisplayNone] = useState(true);
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
    <nav
      className={`flex-spacebetween nav ${
        navWidth > 580 ? "layout-padding" : "layout-padding--mobile"
      }`}
    >
      <Link
        className={
          navWidth > 580
            ? "logo"
            : navWidth > 390
            ? "logo--mobile"
            : "logo--mobile--S"
        }
        to="/"
        onClick={() => handleLinkToggle("home")}
      >
        #VANLIF
      </Link>
      <div className="nav-container relative">
        <div
          className={`flex ${
            navWidth <= 680 ? (navWidth <= 415 ? "gap-20" : "gap-30") : "gap-50"
          }`}
        >
          <Link
            className={`${
              linkStates.host ? " underline" : "no-decoration_link"
            } ${
              navWidth > 580
                ? "nav_link"
                : navWidth > 390
                ? "nav_link--mobile"
                : "nav_link--mobile--S"
            }`}
            to="/host"
            onClick={() => handleLinkToggle("host")}
          >
            Host
          </Link>
          <Link
            className={`${
              linkStates.about ? " underline" : "no-decoration_link"
            } ${
              navWidth > 580
                ? "nav_link"
                : navWidth > 390
                ? "nav_link--mobile"
                : "nav_link--mobile--S"
            }`}
            to="/about"
            onClick={() => handleLinkToggle("about")}
          >
            About
          </Link>
          <Link
            className={`${
              linkStates.vans ? " underline" : "no-decoration_link"
            } ${
              navWidth > 580
                ? "nav_link"
                : navWidth > 390
                ? "nav_link--mobile"
                : "nav_link--mobile--S"
            }`}
            to="/vans"
            onClick={() => handleLinkToggle("vans")}
          >
            Vans
          </Link>
        </div>
      </div>
    </nav>
  );
}
