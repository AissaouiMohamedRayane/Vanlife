import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [linkStates, setLinkStates] = useState({
    about: props.link === "about",
    vans: props.link === "vans",
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
      <div className="flex-spacebetween nav_list">
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
