import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const Login = () => {
  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h1>Welcome To Pulzion 20 Online Judge</h1>
          <Link to="/register">
            <Button variant="contained" color="secondary">
              Register For Contest Here
            </Button>
          </Link>
          <div></div>
          <br />
          <Link to="/login">
            <Button variant="contained" color="secondary">
              Login For Contest Here
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;
