import { useState, useEffect } from "react";
import Button from "./button";

export default function VanCard(props) {
  console.log(props.type);
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

  const imageUrl = `http://127.0.0.1:8000${props.img}`;

  return (
    <>
      <figure className="van-card">
        <img src={imageUrl} alt="image" />
        <figcaption className="vans-card-text flex-column">
          <div className="flex-spacebetween">
            <h1 className="van-card-text nowrap">{props.vanName}</h1>
            <div className="price-container">
              <h1 className="price van-card-text">${props.price}</h1>
              <h6 className="price-time">/day</h6>
            </div>
          </div>
          <Button
            text={props.type}
            color="white-color"
            background={background}
            padding={true}
            buttonClasses="hover fit-content van-card-button"
          />
        </figcaption>
      </figure>
    </>
  );
}
