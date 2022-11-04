import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../components/context/LoginProvider";

const Login = () => {
  const { user, setUser } = useLoginContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <input
            type="text"
            placeholder="email.."
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password.."
            required
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
