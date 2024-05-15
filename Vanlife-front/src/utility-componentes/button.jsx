import { useContext } from "react";
import { WidthContext } from "../Layout/layout";
export default function Button(props) {
  const screenWidth = useContext(WidthContext);
  return (
    <button
      className={`button ${props.color} ${props.background} ${
        props.buttonClasses
      } ${props.width ? "fit-content" : ""} ${
        props.width
          ? screenWidth > 335
            ? "layout-padding-mobile"
            : "layout-padding-mobile--m"
          : "button-padding"
      } ${props.padding ? screenWidth > 380 ? "" : "van-card-button-padding--mobile" : ""}`}
    >
      {props.text}
    </button>
  );
}
