import React from 'react';
import '../navbar/Navbar.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          Recipe <span>Land</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
          <Link to="/randomrecipes">
            <li>Random Recipes</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
