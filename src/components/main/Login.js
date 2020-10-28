import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formField, clearField } from "../../actions/index";
const Login = () => {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      document.getElementById("submit-feedback-neg").innerHTML = "";
      document.getElementById("submit-feedback-pos").innerHTML =
        "Successfully Submitted!!";
      dispatch(clearField(e.target.email));
      dispatch(clearField(e.target.password));
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Fill All Details!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };

  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h4>Pulzion 20' OJ Login</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              value={user.email}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <button type="submit">Login</button>
          </form>
          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            Don't have an account? <Link to="/register">Click Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
