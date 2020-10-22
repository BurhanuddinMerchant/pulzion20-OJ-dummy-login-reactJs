import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main>
      <div class="container">
        <div class="box">
          <h4>Pulzion 20' OJ Login</h4>
          <form>
            <input type="email" placeholder="enter email" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Click Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
export default Login;
