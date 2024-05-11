import {
  useParams,
  Link,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../fake-server/vans-data";
import arrow from "../assets/Arrow1.svg";
export default function VanDetailLayout(props) {
  const parm = useParams();
  const vanId = parm.id;
  const [van, setVan] = useState(1);
  const [imageHeight, setImageHeight] = useState("0px");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageRef = useRef(1);

  const navigate = useNavigate();

  const { state } = useLocation();

  const location = state;

  function returnToVans() {
    if (!location) {
      return "Back to all Vans";
    }
    if (!location.type1 && !location.type2 && !location.type3) {
      return "Back to all Vans";
    } else if (location.type1 && location.type2 && location.type3) {
      return "Back to all Vans";
    } else {
      let features = [];

      if (location.type1) {
        features.push("simple");
      }
      if (location.type2) {
        features.push("luxury");
      }
      if (location.type3) {
        features.push("rugged");
      }

      return (
        "Back to " +
        (features.length > 1 ? features.join(" and ") : features[0]) +
        " Vans"
      );
    }
  }
  function goBack() {
    navigate(-1);
  }

  function image() {
    const height = imageRef.current.clientHeight;
    setImageHeight(`${height}px`);
  }

  useEffect(() => {
    const updateImageHeight = () => {
      const height = imageRef.current.clientHeight;
      setImageHeight(`${height}px`);
      if (imageRef.current) {
        const height = imageRef.current.clientHeight;
        setImageHeight(`${height}px`);
      }
    };

    const handleResize = () => {
      updateImageHeight();
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => {
      handleResize();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const vans = state.vans ? state.vans : state;
    const foundVan = Object.values(vans).find((van) => van.id === vanId);
    if (foundVan) {
      setVan(foundVan);
    }
  }, []);

  const vanDetailNav = (
    <nav className="van-detail-nav flex gap-30">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? windowWidth < 350
              ? "underline--mobile"
              : "underline"
            : windowWidth < 350
            ? "nav_link--mobile no-decoration_link"
            : "nav_link no-decoration_link"
        }
        end
        to=""
      >
        Details
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? windowWidth < 350
              ? "underline--mobile"
              : "underline"
            : windowWidth < 350
            ? "nav_link--mobile no-decoration_link"
            : "nav_link no-decoration_link"
        }
        to="pricing"
      >
        Pricing
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? windowWidth < 350
              ? "underline--mobile"
              : "underline"
            : windowWidth < 350
            ? "nav_link--mobile no-decoration_link"
            : "nav_link no-decoration_link"
        }
        to="photos"
      >
        Photos
      </NavLink>
    </nav>
  );

  return (
    <>
      <div
        className={`van-detail grow ${
          windowWidth > 580 ? "layout-margin" : "layout-margin--mobile"
        }`}
      >
        <div className="flex van-detail-link-container">
          <Link
            to=".."
            state={location ? location : null}
            onClick={() => (props.host ? null : goBack())}
            relative="path"
            className={`${
              windowWidth > 580 ? "van-detail-link" : "van-detail-link--mobile"
            }`}
          >
            <span className="mr-r-20">
              <img
                className={windowWidth > 580 ? "arrow" : "arrow--mobile"}
                src={arrow}
                alt=""
              />
            </span>
            {returnToVans()}
          </Link>
        </div>
        <figure
          className={`van-detail-img-container ${
            windowWidth >= 990 ? "flex" : "flex-column"
          } item-start gap-50`}
        >
          <img
            src={van.imageUrl}
            className={windowWidth < 990 ? "full-width" : ""}
            ref={imageRef}
            onLoad={image}
            alt="image"
          />
          <figcaption
            className={`van-detail-caption flex-column ${
              windowWidth >= 1410 ? "gap-40" : "gap-20"
            }`}
            style={{
              height: imageHeight,
            }}
          >
            {props.host && vanDetailNav}
            <Outlet context={[van, setVan]} />
          </figcaption>
        </figure>
      </div>
    </>
  );
}
