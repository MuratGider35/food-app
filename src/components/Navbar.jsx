import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div>
        <h1>RECİPE APP</h1>
        </div>
      
      <div className="links">
        <Link to={"/about"}>About</Link>
        <a href="https://github.com/MuratGider35">Github</a>
        <Link to={"/"}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
