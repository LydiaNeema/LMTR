import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-title">
        
        ShopStack

      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/category"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Category
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
    About
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
    Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
