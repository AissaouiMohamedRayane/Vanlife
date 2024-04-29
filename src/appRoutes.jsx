import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import App from "./Routes/landing-page.jsx";
import About from "./Routes/About.jsx";

import Vans from "./Routes/Vans.jsx";
import VanDetail from "./componentes/vans-page/van-detail.jsx";

import Host from "./Routes/host.jsx";
import Dashboard from "./componentes/host/dashboard.jsx";
import Income from "./componentes/host/income.jsx";
import HostVans from "./componentes/host/host-vans.jsx";
import Reviews from "./componentes/host/reviews.jsx";

const hostRoutes = (
  <>
    <Route path="/host" element={<Dashboard />} />
    <Route path="/host/income" element={<Income />} />
    <Route path="/host/vans" element={<HostVans />} />
    <Route path="/host/reviews" element={<Reviews />} />
  </>
);

const layoutRoutes = (
  <>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/vans" element={<Vans />} />
    <Route path="/vans/:id" element={<VanDetail />} />
    <Route element={<Host />}>{hostRoutes}</Route>
  </>
);

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>{layoutRoutes}</Route>
  </Routes>
);

export default AppRoutes;