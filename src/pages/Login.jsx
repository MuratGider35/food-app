import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <form onSubmit={()=>navigate("/home")}>
        <div className="input">
          <input type="text" placeholder="email.." required />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password.."
            required
          />
          <button>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
