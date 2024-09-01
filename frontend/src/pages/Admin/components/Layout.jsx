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
              <span className="hide-mobile">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/admin/profile"
            >
              <span className="hide-mobile">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/projects"
            >
              <span className="hide-mobile">Project</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/courses"
            >
              <span className="hide-mobile">Courses</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/friends"
            >
              <span className="hide-mobile">Friends</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/files"
            >
              <span className="hide-mobile">Files</span>
            </Link>
          </li>
          <li>
            <Link
              className="d-flex align-center fs-14 c-black rad-6 p-10"
              to="/plans"
            >
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
            <img src="./Images/avatar-05.png" alt="User Avatar" />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
