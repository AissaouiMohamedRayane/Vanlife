import { Link } from "react-router-dom";
import image from "../../assets/image2.png";
import Button from "../button";
export default function Body() {
  return (
    <div className="grow">
      <figure className="about-hero-image">
        <img src={image} alt="image" />
      </figure>
      <main className="gap-60 about-main flex-column">
        <h1 className="about-h1">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="flex-column gap-20">
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
        <div className="about-card">
          <h2 className="about-h2">
            <span className="nowrap">Your destination is waiting.</span>
            <br />
            <span className="nowrap">Your van is ready.</span>
          </h2>
          <Link to='/vans'>
            <Button
              text="Explore our vans"
              background="black-background"
              color="white-color"
              buttonClasses="about-card-button hover scale"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
