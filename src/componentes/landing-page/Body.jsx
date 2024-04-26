import backImage from "../../assets/image.svg";
export default function Body() {
  return (
    <figure className="image_container">
      <img className="back_image" src={backImage} alt="image" />
      <figcaption className="image_caption ">
        <h1 className="image_h1">You got the travel plans, we got the travel vans.</h1>
        <p className="image_text">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="orange_button">Find your van</button>
      </figcaption>
    </figure>
  );
}
