import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  
import './user.css'; // Importing the CSS file


const User = () => {
  return (
    <div>
      <Header />
      
      <div className="user">
`      <h2 className="client">Informations personnelles</h2>
          <div className="coordonnees">
            <p>Adresse email</p>
            <p>Mot de passe</p>
            <p>Nom de famille</p>
            <p>Prénom</p>
            <p>Numéro de téléphone</p>
            <p>Rue + numéro</p>
            <p>Code postal</p>
            <p>Localité</p>
          </div>
          <div  className="coord">
            <p>charlotteponcin@hotmail.com</p>
            <p>*****</p>
            <p>Poncin</p>
            <p>Charlotte</p>
            <p>0472105930</p>
            <p>Rue des Sorbiers 9b</p>
            <p>4050</p>
            <p>Chaudfontaine</p>
          </div>`
        <h2 className="commandes">Commandes</h2>
          <div className="status">
            <p>Numéro de commande</p>
            <p>Date de commande</p>
            <p>Produits</p>
            <p>Status</p>
          </div>
          <div className="livraison">
            <p>1</p>
            <p>01/01/2025</p>
            <p>Miel 250g x1</p>
            <p>Livré / En cours de livraison</p>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default User;
