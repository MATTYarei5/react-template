import React from 'react';
import { Link } from 'react-router-dom';
import '..//../styles/header.scss';

function Header() {
  return (
    <header className="header">
      <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/products">Products</Link></p>
          <p><Link to="/cart">Cart</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/about">About</Link></p>
      </nav>
    </header>
  );
}

export default Header;