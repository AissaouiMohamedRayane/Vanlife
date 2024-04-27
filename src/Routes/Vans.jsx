import Navbar from "../componentes/NavBar";
import VansBody from "../componentes/vans-page/vans-page-body";
import Footer from "../componentes/footer";
export default function Vans() {
  return (
    <div className="vasn">
      <Navbar link="vans" />
      <VansBody />
      <Footer />
    </div>
  );
}
