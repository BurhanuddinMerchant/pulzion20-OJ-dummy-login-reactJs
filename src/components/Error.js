import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main>
      <div class="container">
        <div class="box" style={{ textAlign: "center" }}>
          <h1>404 Page Not found!</h1>
          <Link to="/">
            <button>Navigate Back Home</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
