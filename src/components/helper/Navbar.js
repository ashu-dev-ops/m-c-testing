import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/auth">sign-up</Link>
      <Link to="/chat-page">chat page</Link>
      <Link to="/">home</Link>
    </div>
  );
};

export default Navbar;
