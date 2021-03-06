import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="current">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">All Problems</Link>
        </li>
        <li>
          <Link to="/">Leader Board</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
