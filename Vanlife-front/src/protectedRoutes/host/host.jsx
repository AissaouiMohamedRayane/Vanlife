import { NavLink } from "react-router-dom";
import { Outlet, useOutletContext } from "react-router-dom";
import Cookies from "js-cookie";
import logout from "../../API/logout";
export default function Host() {
  // const [NavLinkStates, setNavLinkStates] = useState({
  //   dashboard: true,
  //   income: false,
  //   vans: false,
  //   reviews: false,
  // });

  // function handleNavLinkToggle(NavLink) {
  //   setNavLinkStates((prev) => {
  //     const updatedStates = {};
  //     Object.keys(prev).forEach((key) => {
  //       updatedStates[key] = key === NavLink;
  //     });
  //     return updatedStates;
  //   });
  // }

  const setLogin = useOutletContext();

  async function handleLogout() {
    const res = await logout();
    if (res) {
      Cookies.remove("loggedInUser");
      setLogin(false);
    }
  }
  return (
    <main className="host-main grow">
      <section className="flex-spacebetween layout-margin">
        <nav className="host-nav flex flex-wrap  gap-40">
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            end
            to=""
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to="income"
          >
            Income
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline" : "nav_link no-decoration_link"
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </nav>
        <button className="logout hover scale" onClick={handleLogout}>
          logout
        </button>
      </section>
      <Outlet />
    </main>
  );
}
