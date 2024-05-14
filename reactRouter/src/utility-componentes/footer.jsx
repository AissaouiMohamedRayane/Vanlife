import { useContext } from "react";
import { WidthContext } from "../Layout/layout";
export default function Footer() {
  const screenWidth = useContext(WidthContext);

  return (
    <footer
      className={`footer ${
        screenWidth > 580
          ? "layout-padding "
          : screenWidth > 335
          ? "layout-padding-mobile"
          : "layout-padding-mobile--s"
      }`}
    >
      <h1 className={`footer_text`}>Ⓒ 2022 #VANLIFE</h1>
    </footer>
  );
}
