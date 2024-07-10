import { Route } from "react-router-dom";

import VanDetail from "../utility-componentes/van-detail.jsx";
import Host from "../protectedRoutes/host/host.jsx";
import Edit from "../pages/edit/edit.jsx";

import Dashboard from "../pages/host/dashboard.jsx";
import Income from "../pages/host/income.jsx";
import HostVans from "../pages/host/host-vans.jsx";
import Reviews from "../pages/host/reviews.jsx";

import VanDetailLayout from "../Layout/vans-detail-layout.jsx";
import Pricing from "../pages/host/details/pricing.jsx";
import Photos from "../pages/host/details/Photos.jsx";

export const hostRoutes = (
  <>
    <Route path='host' element={<Host />}>
      <Route index element={<Dashboard />} />
      <Route path='edit/:id' element={<Edit />} />
      <Route path='income' element={<Income />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<VanDetailLayout host={true} />}>
        <Route index element={<VanDetail />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='photos' element={<Photos />} />
      </Route>
      <Route path='reviews' element={<Reviews />} />
    </Route>
  </>
);
