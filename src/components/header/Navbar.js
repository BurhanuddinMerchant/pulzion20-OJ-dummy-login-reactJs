import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">All Problems</Link>
        </li>
        <li>
          <a href="#">Leader Board</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
