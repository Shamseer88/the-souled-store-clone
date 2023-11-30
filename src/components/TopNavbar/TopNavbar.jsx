import { NavLink } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import "./TopNavbar.css";

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="top-navbar-left">
        <NavLink to="/">
          <div className="top-navbar-logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </NavLink>
      </div>
      <div className="top-navbar-center">
        <NavLink
          to="/"
          className="top-navbar-navlink home"
          activeClassName="active"
        >
          HOME
        </NavLink>
        <NavLink to="/men" className="top-navbar-navlink men">
          MEN
        </NavLink>
        <NavLink to="/women" className="top-navbar-navlink women">
          WOMEN
        </NavLink>
      </div>
      <div className="top-navbar-right">
        <p>
          <BsPhone /> DOWNLOAD APP
        </p>
      </div>
    </div>
  );
}
