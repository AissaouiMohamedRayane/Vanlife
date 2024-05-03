import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../fake-server/vans-data";
import arrow from "../assets/Arrow1.svg";
export default function VanDetailLayout(props) {
  const parm = useParams();
  const vanId = parm.id;
  const [van, setVan] = useState(1);
  const [background, setBackground] = useState({});
  const [imageHeight, setImageHeight] = useState("0px");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageRef = useRef(1);

  const navigate = useNavigate();

  function image() {
    const height = imageRef.current.clientHeight;
    setImageHeight(`${height}px`);
  }

  const goBack = () => {
    navigate(-1);
  };
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
    fetch(`https://vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);
  useEffect(() => {
    if (van.type === "simple") {
      setBackground("dark-orange-background");
    } else if (van.type === "rugged") {
      setBackground("green-background");
    } else if (van.type === "luxury") {
      setBackground("black-background");
    }
  }, [van]);

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
      {van !== 1 ? (
        <div
          className={`van-detail grow ${
            windowWidth > 580 ? "layout-margin" : "layout-margin--mobile"
          }`}
        >
          <div className="flex van-detail-link-container">
            <Link
              onClick={goBack}
              className={`${
                windowWidth > 580
                  ? "van-detail-link"
                  : "van-detail-link--mobile"
              }`}
            >
              <span className="mr-r-20">
                <img
                  className={windowWidth > 580 ? "arrow" : "arrow--mobile"}
                  src={arrow}
                  alt=""
                />
              </span>
              Back to all vans
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
              <Outlet />
            </figcaption>
          </figure>
        </div>
      ) : (
        <>
          <h2 className="center-position-absolute">loading...</h2>
          <div className="grow"></div>
        </>
      )}
    </>
  );
}
