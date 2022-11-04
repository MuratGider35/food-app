import React from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../components/context/LoginProvider";

const Navbar = () => {
  const { user, setUser } = useLoginContext();
  return (
    <div className="navbar">
      <div>

        <Link to={"/home"}><h1>RECİPE APP</h1></Link>
        
      </div>

      <div className="links">
        <Link to={"/about"}>About</Link>
        <a href="https://github.com/MuratGider35">Github</a>
        {!user.email ? (
          <Link className="nav-link" to="/">
            Login
          </Link>
        ) : (
          <Link
            onClick={() => setUser({ email: "", password: "" })}
            className="nav-link"
            to="/"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
