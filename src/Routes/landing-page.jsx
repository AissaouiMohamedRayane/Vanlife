import backImage from "../assets/image.svg";
import Button from "../componentes/utility-componentes/button";
import { Link } from "react-router-dom";
export default function Body() {
  return (
    <figure className="image_container">
      <img className="back_image" src={backImage} alt="image" />
      <figcaption className="image_caption ">
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
