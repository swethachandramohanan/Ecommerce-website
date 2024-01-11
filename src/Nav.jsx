import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <>
     <header className="header" id="header">
        <nav className="nav container">
        <Link to="/" className="nav__logo">
            <img src="./logo6.png" alt="Logo" className='logo' />
          </Link>
        
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              
              <li className="nav__item">
                <Link to="/services" className="nav__link">
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/cart" className="nav__link">
                <span class="material-symbols-outlined">
shopping_cart
</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/profile" className="nav__link">
                <span class="material-symbols-outlined">
account_circle
</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/user" className="nav__link  button">
                  Register
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/login" className="nav__link button">
                  Login
                </Link>
              </li>

            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
