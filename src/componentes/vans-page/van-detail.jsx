import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../utility-componentes/button";
import "../../fake-server/vans-data";
export default function VanDetail(props) {
  const [van, setVan] = useOutletContext();
  const [background, setBackground] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
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
      <div className="flex-column gap-20">
        <div
          className={`flex-spacebetween gap-30 ${
            windowWidth >= 870 ? "" : "flex-wrap"
          }`}
        >
          <Button
            text={van.type}
            background={background}
            color="white-color"
            buttonClasses={`${
              windowWidth > 350
                ? "van-detail-button"
                : "van-detail-button--mobile"
            } ${
              windowWidth >= 1077 ? "" : "van-detail-button-font-size--XL "
            } ${windowWidth < 350 ? "" : ""}`}
          ></Button>
          <h1
            className={`van-detail-h1--XLL nowrap ${
              windowWidth >= 1077
                ? ""
                : windowWidth > 280
                ? "van-detail-h1--XL"
                : "van-detail-h1--mobile"
            }`}
          >
            {van.name}
          </h1>
        </div>
        <h2
          className={
            windowWidth >= 1310 ? "van-detail-h2--XLL" : "van-detail-h2--XL"
          }
        >
          <span className={windowWidth >= 1110 ? "bold--XLL" : "bold--XL"}>
            ${van.price}
          </span>
          /day
        </h2>
      </div>
      <p
        className={`${
          windowWidth >= 1400
            ? "van-detail-descreption--XLL"
            : windowWidth >= 1290
            ? "van-detail-descreption--XL"
            : windowWidth >= 1110
            ? "van-detail-descreption--L"
            : "van-detail-descreption--M"
        } grow`}
      >
        {van.description}
      </p>
      <Button
        text="Rent this van"
        color="white-color"
        background="orange-background"
        buttonClasses={` ${
          windowWidth >= 1077 ? "" : "van-detail-button-font-size--XL "
        }`}
      ></Button>
    </>
  );
}
