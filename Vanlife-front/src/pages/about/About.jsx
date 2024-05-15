import { Link } from "react-router-dom";
import image from "../../assets/image2.png";
import Button from "../../utility-componentes/button";
import {  useContext } from "react";
import { WidthContext } from "../../Layout/layout";
export default function Body() {
  const screenWidth = useContext(WidthContext);

  return (
    <div className="grow flex-column nogap">
      <figure className="about-hero-image">
        <img src={image} alt="image" />
      </figure>
      <main
        className={`flex-column grow justify-spaceevenly ${
          screenWidth > 580
            ? "layout-margin "
            : screenWidth > 335
            ? "layout-margin-mobile"
            : "layout-margin-mobile--s"
        }`}
      >
        <h1 className="about-h1">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div
          className={`flex-column ${screenWidth > 335 ? "gap-20" : "gap-10"})`}
        >
          <p className="about-text">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="about-text">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div
          className={`about-card flex-column ${
            screenWidth > 580
              ? "layout-padding gap-60"
              : screenWidth > 335
              ? "layout-padding-mobile gap-20"
              : "layout-padding-mobile--s gap-10"
          }`}
        >
          <h2 className="about-h2">
            <span className="nowrap">Your destination is waiting.</span>
            <br />
            <span className="nowrap">Your van is ready.</span>
          </h2>
          <Link to="/vans">
            <Button
              text="Explore our vans"
              background="black-background"
              color="white-color"
              width={true}
              buttonClasses="about-card-button hover scale nowrap"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
