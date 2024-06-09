import Navbar from "../utility-componentes/NavBar";
import Footer from "../utility-componentes/footer";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import SideBar from "../utility-componentes/SideBar";
import Cookies from "js-cookie";

export const WidthContext = createContext();
export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const Cooki = Cookies.get("loggedInUser");
  const login = !!Cooki;

  const [loggedIn, setLoggedIn] = useState(login);
  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      {children}
    </LoginContext.Provider>
  );
};

export default function Layout() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();
  const [profileClicked, setProfileClicked] = useState(false);
  useEffect(() => {
    setIsPageLoading(false);
  }, [location]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isPageLoading && <div className='loader'></div>}
      <LoginProvider>
        <WidthContext.Provider value={screenWidth}>
          <Navbar setProfileClicked={setProfileClicked} />
          <Outlet />
          {profileClicked && <SideBar />}
          <Footer />
        </WidthContext.Provider>
      </LoginProvider>
    </>
  );
}
