import backImage from "../../assets/image.png";
import Button from "../../utility-componentes/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Body() {
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
  return (
    <figure
      className={`image_container`}
    >
      <img className="back_image" src={backImage} alt="image" />
      <figcaption className={`image_caption ${
        navWidth > 580
          ? "layout-padding "
          : navWidth > 335
          ? "layout-padding-mobile"
          : "layout-padding-mobile--s"
      }`}>
        <h1 className="image_h1">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="image_text">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">
          <Button
            color="white-color"
            background="orange-background"
            text="Find your van"
            buttonClasses="mr-t-20 hover"
          />
        </Link>
      </figcaption>
    </figure>
  );
}
