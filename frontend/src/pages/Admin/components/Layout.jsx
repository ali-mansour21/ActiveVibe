import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/all.min.css";
import "../styles/framwork.css";
import "../styles/master.css";
import "../styles/normalize.css";
const Layout = () => {
  const location = useLocation();
  return (
    <div className="d-flex">
      <div className="sidebar bg-white p-20 p-relative">
        <h3 className="p-relative txt-c mt-0">Ali</h3>
        <ul className="list-none p-0">
          <li>
            <Link
              className={`${
                location.pathname === "/admin" ? "active" : ""
              } d-flex align-center fs-14 c-black rad-6 p-10`}
              to="/admin"
            >
              <span className="hide-mobile">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/admin/categories" ? "active" : ""
              } d-flex align-center fs-14 c-black rad-6 p-10`}
              to="/admin/categories"
            >
              <span className="hide-mobile">Categories</span>
            </Link>
          </li>
          <li>
            <Link
              className={` ${
                location.pathname === "/admin/guides" ? "active" : ""
              } d-flex align-center fs-14 c-black rad-6 p-10`}
              to="/admin/guides"
            >
              <span className="hide-mobile">Guides</span>
            </Link>
          </li>
          <li>
            <Link
              className={` ${
                location.pathname === "/admin/events" ||
                location.pathname === "/admin/add-event"
                  ? "active"
                  : ""
              } d-flex align-center fs-14 c-black rad-6 p-10`}
              to="/admin/events"
            >
              <span className="hide-mobile">Events</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content w-full">
        {/* Header */}
        <div className="head bg-white p-15 ">
          <div className="icons d-flex align-center justify-end">
            <img src="./Images/avatar-05.png" alt="User Avatar" />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
