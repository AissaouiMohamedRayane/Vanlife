import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import App from "./Routes/landing-page.jsx";
import About from "./Routes/About.jsx";

import Vans from "./Routes/Vans.jsx";
import { loader as vansLoader } from "./Routes/Vans.jsx";
import VansErrour from "./componentes/utility-componentes/VansErrour.jsx";
import VanDetail from "./componentes/vans-page/van-detail.jsx";

import Host from "./Routes/host.jsx";
import Dashboard from "./componentes/host/dashboard.jsx";
import Income from "./componentes/host/income.jsx";
import HostVans from "./componentes/host/host-vans.jsx";
import Reviews from "./componentes/host/reviews.jsx";

import VanDetailLayout from "./Routes/vans-detail-layout.jsx";
import Pricing from "./componentes/host/details/pricing.jsx";
import Photos from "./componentes/host/details/Photos.jsx";

const hostRoutes = (
  <>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<VanDetailLayout host={true} />}>
      <Route index element={<VanDetail />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="photos" element={<Photos />} />
    </Route>
    <Route path="reviews" element={<Reviews />} />
  </>
);
const errorRoutes = (
  <Route
    path="*"
    element={<h1 className="grow layout-margin">Page not found</h1>}
  />
);

const layoutRoutes = (
  <>
    <Route index element={<App />} />
    <Route path="about" element={<About />} />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<VansErrour />}
      loader={vansLoader}
    />

    <Route path="vans/:id" element={<VanDetailLayout host={false} />}>
      <Route index element={<VanDetail />} />
    </Route>
    {errorRoutes}

    <Route path="host" element={<Host />}>
      {hostRoutes}
    </Route>
  </>
);
const AppRoutes = () => {
  return (
    <Route path="/" element={<Layout />}>
      {layoutRoutes}
    </Route>
  );
};

export default AppRoutes;
