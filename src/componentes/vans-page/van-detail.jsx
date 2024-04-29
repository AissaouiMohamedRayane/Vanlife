import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Button from "../utility-componentes/button";
import "../../fake-server/vans-data";
import arrow from "../../assets/Arrow1.svg";
export default function VanDetail() {
  const parm = useParams();
  const vanId = parm.id;
  const [van, setVan] = useState(1);
  const [background, setBackground] = useState({});
  const [imageHeight, setImageHeight] = useState("0px");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageRef = useRef(1);

  function image() {
    const height = imageRef.current.clientHeight;
    setImageHeight(`${height}px`);
  }

  useEffect(() => {
    const updateImageHeight = () => {
      const height = imageRef.current.clientHeight;
      setImageHeight(`${height}px`);
      if (imageRef.current) {
        const height = imageRef.current.clientHeight;
        setImageHeight(`${height}px`);
      }
    };

    const handleResize = () => {
      updateImageHeight();
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => {
      handleResize();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {van !== 1 ? (
        <div className="van-detail grow layout-margin">
          <div className="flex van-detail-link-container">
            <Link to="/vans" className="van-detail-link">
              <span className="mr-r-20">
                <img className="arrow" src={arrow} alt="" />
              </span>
              Back to all vans
            </Link>
          </div>
          <figure
            className={`van-detail-img-container ${
              windowWidth >= 670 ? "flex" : "flex-column"
            } item-start gap-50`}
          >
            <img src={van.imageUrl} ref={imageRef} onLoad={image} alt="image" />
            <figcaption
              className={`van-detail-caption flex-column ${
                windowWidth >= 1310 ? "gap-40" : "gap-20"
              }`}
              style={{
                height: imageHeight,
              }}
            >
              <div className="flex-column gap-30">
                <div
                  className={`flex-spacebetween gap-30 ${
                    windowWidth >= 670 ? "" : "flex-wrap"
                  }`}
                >
                  <Button
                    text="simple"
                    background={background}
                    color="white-color"
                    buttonClasses="van-detail-button"
                  ></Button>
                  <h1 className="van-detail-h1--XLL">{van.name}</h1>
                </div>
                <h2
                  className={
                    windowWidth >= 1310
                      ? "van-detail-h2--XLL"
                      : "van-detail-h2--XL"
                  }
                >
                  <span
                    className={windowWidth >= 1310 ? "bold--XLL" : "bold--XL"}
                  >
                    ${van.price}
                  </span>
                  /day
                </h2>
              </div>
              <p
                className={`${
                  windowWidth >= 1310
                    ? "van-detail-descreption--XLL"
                    : "van-detail-descreption--XL"
                } grow`}
              >
                {van.description}
              </p>
              <Button
                text="Rent this van"
                color="white-color"
                background="orange-background"
              ></Button>
            </figcaption>
          </figure>
        </div>
      ) : (
        <>
          <h2 className="center-position-absolute">loading...</h2>
          <div className="grow"></div>
        </>
      )}
    </>
  );
}
