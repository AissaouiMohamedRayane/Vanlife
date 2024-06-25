import { Route } from "react-router-dom";
import App from "../pages/landing/landing-page.jsx";
import About from "../pages/about/About.jsx";

import Vans from "../pages/vans-page/Vans.jsx";
import { loader as vansLoader } from "../pages/vans-page/Vans.jsx";
import VansErrour from "../utility-componentes/VansErrour.jsx";
import VanDetail from "../utility-componentes/van-detail.jsx";

import VanDetailLayout from "../Layout/vans-detail-layout.jsx";


import Login from "../pages/login/login.jsx";
import Register from "../pages/register/register.jsx";
import AuthRequired from "../protectedRoutes/AuthRequired.jsx";

import { protectedRoutes } from "./protectedRoutes.jsx";
export const layoutRoutes = (
  <>
    <Route index element={<App />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
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
    <Route
      path="*"
      element={<h1 className="grow layout-margin">Page not found</h1>}
    />
    <Route element={<AuthRequired />}>{protectedRoutes}</Route>
  </>
);
