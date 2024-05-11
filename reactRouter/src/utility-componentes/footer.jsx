import { useEffect, useState } from "react";
export default function Footer() {
  const [navWidth, setNavWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setNavWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className={`footer ${
          navWidth > 580
            ? "layout-padding "
            : navWidth > 335
            ? "layout-padding-mobile"
            : "layout-padding-mobile--s"
        }`}>
      <h1
        className={`footer_text`}
      >
        Ⓒ 2022 #VANLIFE
      </h1>
    </footer>
  );
}
