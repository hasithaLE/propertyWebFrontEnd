import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorite">About</Link>
    </nav>
  );
};

export default Nav;