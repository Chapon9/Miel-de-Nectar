import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './register.css'; // Import the CSS file

const Register = () => {
  return (
    <div className="register-container">
      <Header />
      <div className="form-container">
        <p className="form-heading">S'inscrire</p>

        <div className="form-fields">
          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="email" className="form-label">Adresse email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              className="form-input"
            />
          </div>

          {/* Password Field */}
          <div className="form-field">
            <label htmlFor="password" className="form-label">Mot de passe *</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="form-input"
            />
          </div>

          {/* Family Name Field */}
          <div className="form-field">
            <label htmlFor="nom" className="form-label">Nom de famille *</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Entrez votre nom de famille"
              className="form-input"
            />
          </div>

          {/* First Name Field */}
          <div className="form-field">
            <label htmlFor="prenom" className="form-label">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Entrez votre prénom"
              className="form-input"
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-field">
            <label htmlFor="telephone" className="form-label">Numéro de téléphone *</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Entrez votre numéro de téléphone"
              className="form-input"
            />
          </div>

          {/* Street Field */}
          <div className="form-field">
            <label htmlFor="rue" className="form-label">Rue + numéro *</label>
            <input
              type="text"
              id="rue"
              name="rue"
              placeholder="Entrez votre rue + numéro"
              className="form-input"
            />
          </div>

          {/* Postal Code Field */}
          <div className="form-field">
            <label htmlFor="cp" className="form-label">Code postal *</label>
            <input
              type="text"
              id="cp"
              name="cp"
              placeholder="Entrez votre code postal"
              className="form-input"
            />
          </div>

          {/* Locality Field */}
          <div className="form-field">
            <label htmlFor="localite" className="form-label">Localité *</label>
            <input
              type="text"
              id="localite"
              name="localite"
              placeholder="Entrez votre localité"
              className="form-input"
            />
          </div>

          <p>*obligatoire</p>

          {/* Google Login Section */}
          <div className="google-login">
            <button className="google-login-btn">S'inscrire</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
