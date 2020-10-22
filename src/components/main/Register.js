import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <main>
      <div class="container">
        <div class="box">
          <h4>Signup for Pulzion 2020</h4>
          <form>
            <input type="name" placeholder="name" />
            <input type="email" placeholder="enter email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <input type="phone number" placeholder="phone number" />
            <button type="submit">Sign-Up</button>
          </form>
          <p>
            already have an account? <Link to="/login">Click Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
export default Register;
