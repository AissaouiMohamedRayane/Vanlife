import { Route } from "react-router-dom";
import Layout from "../Layout/layout.jsx";

import {layoutRoutes} from "./layoutRoutes.jsx";

const AppRoutes = () => {
  return (
    <Route path="/" element={<Layout />}>
      {layoutRoutes}
    </Route>
  );
};

export default AppRoutes;
