import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "../Routes/login";
export default function AuthRequired() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return <Outlet />;
}
