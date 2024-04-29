import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [linkStates, setLinkStates] = useState({
    about: false,
    vans: false,
    host: false,
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
    <nav className="flex-spacebetween nav">
      <Link className="logo" to="/" onClick={() => handleLinkToggle("home")}>
        #VANLIF
      </Link>
      <div className="nav_list">
        <Link
          className={linkStates.host ? " underline" : "nav_link"}
          to="/host"
          onClick={() => handleLinkToggle("host")}
        >
          Host
        </Link>
        <Link
          className={linkStates.about ? " underline" : "nav_link"}
          to="/about"
          onClick={() => handleLinkToggle("about")}
        >
          About
        </Link>
        <Link
          className={linkStates.vans ? " underline" : "nav_link"}
          to="/vans"
          onClick={() => handleLinkToggle("vans")}
        >
          Vans
        </Link>
      </div>
    </nav>
  );
}
