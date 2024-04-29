import Navbar from "./componentes/utility-componentes/NavBar";
import Footer from "./componentes/utility-componentes/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
