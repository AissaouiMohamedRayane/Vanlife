import Navbar from "../utility-componentes/NavBar";
import "../fake-server/vans-data";
import Footer from "../utility-componentes/footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsPageLoading(false);
  }, [location]);

  return (
    <>
      {isPageLoading && <div className="loader"></div>}
      <Navbar setIsPageLoading={setIsPageLoading} />
      <Outlet context={setIsPageLoading} />
      <Footer />
    </>
  );
}
