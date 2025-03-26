import React from 'react';
import './header.css'; 
import logo from '../assets/logo.png'; 
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon


function Header() {
  return (
    <header className="honey-header">
      <div className="logo">
        <img className="red" src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="boutique"><a href="/boutique">Boutique</a></li>
          <li className="qui"><a href="/info">Qui sommes-nous?</a></li>
          <li className="contact"><a href="/contact">Contact</a></li>
          <li className="panier"><a href="/panier">    
          <div>
            <FaShoppingCart size={30} color="black" /> {/* You can adjust size and color */}
          </div></a></li>
          <li className="register"><a href="/register">Register</a></li>
          <li className="login"><a href="/login">Login</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;


