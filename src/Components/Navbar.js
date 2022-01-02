import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" >
          Home
        </Link>
        <Link to="/list" className="navbar-brand" >
          Products
        </Link>
        <Link to="/profile" className="navbar-brand" >
          User Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
