import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {
  // Common link classes for DRY code
  const baseLink =
    "relative px-4 py-2 rounded font-semibold transform transition duration-300 ease-in-out shadow overflow-hidden";
  const underline =
    "absolute left-0 bottom-0 h-1 bg-[#ff0c00] transition-all duration-300 ease-in-out w-0 group-hover:w-full";

  return (
    <nav className="bg-cyan-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pinimg.com/736x/16/83/ce/1683ce4224984540b13df101494d689c.jpg"
            alt="ShopLogo"
            className="h-20 w-20  bg-white "
          />
          <span className="text-2xl font-bold text-green-100">ShopStack</span>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/category", label: "Category" },
            { to: "/about", label: "About" },
            { to: "/contacts", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `${baseLink} group ${
                  isActive
                    ? "bg-cyan-600 text-white scale-110"
                    : "bg-blue-300 text-black-700 hover:text-white hover:scale-110"
                }`
              }
            >
              <span className="relative z-10">{label}</span>
              {/* Underline Effect */}
              <span className={underline}></span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
