import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../utility-componentes/button";
export default function VanCard(props) {
  const [background, setBackground] = useState(null);
  useEffect(() => {
    if (props.type === "simple") {
      setBackground("dark-orange-background");
    } else if (props.type === "rugged") {
      setBackground("green-background");
    } else if (props.type === "luxury") {
      setBackground("black-background");
    }
  }, []);

  return (
    <Link to={props.id} className="no-decoration black-color hover">
      <figure className="van-card">
        <img src={props.img} alt="image" />
        <figcaption className="vans-card-text flex-column">
          <div className="flex-spacebetween">
            <h1 className="van-card-h1">{props.vanName}</h1>
            <div className="price-container">
              <h1 className="price">${props.price}</h1>
              <h6 className="price-time">/day</h6>
            </div>
          </div>
          <Button
            text={props.type}
            color="white-color"
            background={background}
            buttonClasses="van-card-button hover"
          />
        </figcaption>
      </figure>
    </Link>
  );
}
