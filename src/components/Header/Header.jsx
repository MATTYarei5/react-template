import React from 'react';
import { Link } from 'react-router-dom';
import '..//../styles/header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Shop</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;