import { Route } from "react-router-dom";


import Host from "../protectedRoutes/host/host.jsx";

import { hostRoutes } from "./hostRoytes.jsx";




export const protectedRoutes = (
    <>
    {hostRoutes}
    </>
);
