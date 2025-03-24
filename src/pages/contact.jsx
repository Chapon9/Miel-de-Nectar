import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  
import './contact.css'; // Importing the CSS file
import { FaEnvelope } from 'react-icons/fa'; // Email icon from FontAwesome
import { FaFacebook } from 'react-icons/fa'; // Facebook icon from FontAwesome
import { FaPhone } from 'react-icons/fa'; // Phone icon from FontAwesome

const Contact = () => {
  return (
    <div>
      <Header />
      
      <div className="contact-container">
        <h1>Contactez-nous</h1>
  
        
        <div className="contact-methods">

          
          <div className="contact-item">
            <FaFacebook className="contact-icon" />
            <div>

              <p><a href="https://www.facebook.com/Rucher-de-Stoqueu" target="_blank" rel="noopener noreferrer">Rucher de Stoqueu</a></p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>

              <p>philippeneo@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>

              <p>0475685201</p>
            </div>
          </div>



        </div>
        <p className="contact-intro">
          Nous serions ravis d’avoir de vos nouvelles! 
        </p>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
