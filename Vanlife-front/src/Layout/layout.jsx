import Navbar from "../utility-componentes/NavBar";
import Footer from "../utility-componentes/footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const WidthContext = createContext();

export default function Layout() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsPageLoading(false);
  }, [location]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isPageLoading && <div className="loader"></div>}
      <WidthContext.Provider value={screenWidth}>
        <Navbar />
        <Outlet />
        <Footer />
      </WidthContext.Provider>
    </>
  );
}
