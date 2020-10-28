import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formField, clearField } from "../../actions";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
const Register = () => {
  // const [user, setUser] = useState();
  const user = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.password.value);
    const { name, email, phoneNumber, password, confirmPassword } = user;
    if (name && email && phoneNumber && password && confirmPassword) {
      if (password !== confirmPassword) {
        document.getElementById("submit-feedback-neg").innerHTML =
          "Passwords Don't match!!";
        document.getElementById("submit-feedback-pos").innerHTML = "";

        dispatch(clearField(e.target.password));
        dispatch(clearField(e.target.confirmPassword));
      } else {
        document.getElementById("submit-feedback-neg").innerHTML = "";
        document.getElementById("submit-feedback-pos").innerHTML =
          "Successfully Submitted!!";
        dispatch(clearField(e.target.password));
        dispatch(clearField(e.target.confirmPassword));
        dispatch(clearField(e.target.name));
        dispatch(clearField(e.target.email));
        dispatch(clearField(e.target.phoneNumber));
      }
    } else {
      document.getElementById("submit-feedback-neg").innerHTML =
        "Please Fill out all details!!";
      document.getElementById("submit-feedback-pos").innerHTML = "";
    }
  };

  return (
    <main>
      <div className="container">
        <div className="box" style={{ textAlign: "center" }}>
          <h2>Signup for Pulzion 2020</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="name"
              id="name"
              name="name"
              placeholder="name"
              value={user.name}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="enter email"
              value={user.email}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <Input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <Input
              type="password"
              placeholder="confirm password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <Input
              type="phone number"
              placeholder="phone number"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={(e) => dispatch(formField(e.target))}
            />
            <br />
            <Button variant="contained" color="secondary" type="submit">
              Sign-Up
            </Button>
          </form>

          <div id="submit-feedback-pos"></div>
          <div id="submit-feedback-neg"></div>
          <p>
            already have an account? <Link to="/login">Click Here</Link>
          </p>
        </div>
      </div>
    </main>
  );
};
export default Register;
