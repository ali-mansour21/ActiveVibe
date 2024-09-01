import { Outlet, Link } from "react-router-dom";
import "../styles/all.min.css";
import "../styles/framwork.css";
import "../styles/master.css";
import "../styles/normalize.css";
const Layout = () => {
  return (
    <div className="d-flex">
      <div className="sidebar bg-white p-20 p-relative">
        <h3 className="p-relative txt-c mt-0">Ali</h3>
        <ul className="list-none p-0">
          <li>
            <Link
              className="active d-flex align-center fs-14 c-black rad-6 p-10"
              to="/admin"
            >
              <i className="fa-solid fa-chart-simple fa-fw"></i>
              <span className="hide-mobile">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/admin/profile"
            >
              <i className="fa-solid fa-user fa-fw"></i>
              <span className="hide-mobile">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/projects"
            >
              <i className="fa-solid fa-diagram-project fa-fw"></i>
              <span className="hide-mobile">Project</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/courses"
            >
              <i className="fa-solid fa-book-open fa-fw"></i>
              <span className="hide-mobile">Courses</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/friends"
            >
              <i className="fa-solid fa-user-group fa-fw"></i>
              <span className="hide-mobile">Friends</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/files"
            >
              <i className="fa-solid fa-file fa-fw"></i>
              <span className="hide-mobile">Files</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/plans"
            >
              <i className="fa-solid fa-layer-group fa-fw"></i>
              <span className="hide-mobile">Plans</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content w-full">
        {/* Header */}
        <div className="head bg-white p-15 ">
          <div className="icons d-flex align-center justify-end">
            <span className="notification p-relative">
              <i className="fa-solid fa-bell fa-lg"></i>
            </span>
            <img src="./Images/avatar-05.png" alt="User Avatar" />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
