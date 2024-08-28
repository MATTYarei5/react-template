import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {

  const [isMobile, setIsMobile] = useState(false)

  return (
    <header className="header">
      <button className='hamburger' onClick={() => setIsMobile(prevState => !prevState)}>
      <FontAwesomeIcon icon='fa-solid fa-bars' />
      </button>
      <nav className={isMobile ? 'mobile-nav': ''}>
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