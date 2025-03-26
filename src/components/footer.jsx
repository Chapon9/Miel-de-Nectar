// src/components/Footer.jsx
import React from 'react';
import './footer.css';  // Import the footer.css file

import logo from '../assets/logo.png'; // Adjust path to the logo image

function Footer() {
  return (
    <footer className="honey-footer">
      <div className="logo">
        <img src={logo} alt="Rucher de Stoqueu Logo" />
      </div>
      <div className="address">
        <p class="underlined">Où nous trouver?</p>
        <p>Rue du Hameau 45</p>
        <p>4920 Aywaille</p>
      </div>
      <div className="C.G.V">
        <p>Conditions générales de vente (C.G.V.)</p>
        <p>Politique de confidentialité</p>
        <p>Livraison</p>
      </div>

    </footer>
  );
}

export default Footer;
