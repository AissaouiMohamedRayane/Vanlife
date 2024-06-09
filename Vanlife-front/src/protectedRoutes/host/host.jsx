import { NavLink } from "react-router-dom";
import { Outlet, useOutletContext } from "react-router-dom";
import Cookies from "js-cookie";
import logout from "../../API/logout";
import layoutPadding from "../../Layout/layout-padding";
import { WidthContext } from "../../Layout/layout";
import { useContext } from "react";
export default function Host() {
  const setLogin = useOutletContext();
  const screenWidth = useContext(WidthContext);

  async function handleLogout() {
    const res = await logout();
    if (res) {
      Cookies.remove("loggedInUser");
      setLogin(false);
    }
  }
  return (
    <main className='host-main grow'>
      <section className={`flex-spacebetween ${layoutPadding(screenWidth)}`}>
        <nav className='host-nav flex flex-wrap  gap-40'>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            end
            to=''
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to='income'
          >
            Income
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to='vans'
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to='reviews'
          >
            Reviews
          </NavLink>
        </nav>
        <button className='logout hover scale' onClick={handleLogout}>
          logout
        </button>
      </section>
      <Outlet />
    </main>
  );
}
