import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link className='li '  to="/">Home</Link>
        <Link className='li 'to="/kids">Kids</Link>
        <Link className='li 'to="/adult">Adult</Link>
        <Link className='li 'to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
