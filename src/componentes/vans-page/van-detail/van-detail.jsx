import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../button";
import Navbar from "../../NavBar";
import "../../../fake-server/vans-data";
import Footer from "../../footer";
import arrow from "../../../assets/Arrow1.svg";
export default function VanDetail() {
  const parm = useParams();
  const vanId = parm.id;
  const [van, setVan] = useState({});
  const [background, setBackground] = useState(null);
  useEffect(() => {
    fetch(`https://vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);
  useEffect(() => {
    if (van.type === "simple") {
      setBackground("dark-orange-background");
    } else if (van.type === "rugged") {
      setBackground("green-background");
    } else if (van.type === "luxury") {
      setBackground("black-background");
    }
  }, [van]);

  return (
    <>
      <Navbar link="vans" />
      <div className="van-detail grow">
        <div className="flex van-detail-link-container">
          <Link to="/vans" className="van-detail-link">
            <span className="mr-r-20">
              <img className="arrow" src={arrow} alt="" />
            </span>
            Back to all vans
          </Link>
        </div>
        <figure className="van-detail-img-container flex item-start">
          <img src={van.imageUrl} alt="image" />
          <figcaption className="van-detail-caption flex-column gap-40">
            <div className="flex-column gap-30">
              <div className="flex-spacebetween ">
                <Button
                  text="simple"
                  background={background}
                  color="white-color"
                  buttonClasses="van-detail-button"
                ></Button>
                <h1 className="van-detail-h1">{van.name}</h1>
              </div>
              <h2 className="van-detail-h2">
                <span className="bold">${van.price}</span>/day
              </h2>
            </div>
            <p className="van-detail-descreption">{van.description}</p>
            <Button
              text="Rent this van"
              color="white-color"
              background="orange-background"
            ></Button>
          </figcaption>
        </figure>
      </div>
      <Footer />
    </>
  );
}
