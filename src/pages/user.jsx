import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  
//import './contact.css'; // Importing the CSS file


const User = () => {
  return (
    <div>
      <Header />
      
        <h2>Compte client</h2>
        <p>Adresse email</p>
        <p>Mot de passe</p>
        <p>Nom de famille</p>
        <p>Prénom</p>
        <p>Numéro de téléphone</p>
        <p>Rue + numéro</p>
        <p>Code postal</p>
        <p>Localité</p>
      <Footer />
    </div>
  );
};

export default User;
