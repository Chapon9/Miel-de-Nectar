import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  
import './login.css'; 

const Login = () => {
  return (
    <div>
      <Header /> 

      {/* Form container with max-width and padding */}
      <div className="form-container">
        <h2 className="form-title">Se connecter</h2>

        <div className="form-fields">
          {/* Email Field */}
          <div className="input-field">
            <label htmlFor="email" className="input-label">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              className="input"
            />
          </div>

          {/* Password Field */}
          <div className="input-field">
            <label htmlFor="password" className="input-label">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="input"
            />
          </div>

          {/* Login Button */}
          <div className="login-button-container">
            <button className="login-button">Se connecter</button>
          </div>

        </div>
      </div>

      <Footer /> 
    </div>
  );
};

export default Login;
