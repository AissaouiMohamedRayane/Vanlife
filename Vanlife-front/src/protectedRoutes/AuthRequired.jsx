import { Outlet } from "react-router-dom";
import Login from "../pages/login/login";
import { useContext } from "react";
import { LoginContext } from "../Layout/layout";
export default function AuthRequired() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return <Outlet context={setIsLoggedIn} />;
}
