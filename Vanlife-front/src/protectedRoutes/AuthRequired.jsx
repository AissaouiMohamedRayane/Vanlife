import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Login from "../pages/login/login";
export default function AuthRequired() {
  const Cooki = Cookies.get("loggedInUser");
  console.log(Cooki);
  const login = !!Cooki;
  const [isLoggedIn, setIsLoggedIn] = useState(login);
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return <Outlet />;
}
