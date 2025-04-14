import React from 'react';
import logo from '../assets/logo.png'; // Adjust path as needed

function Footer() {
  const footerStyle = {
    backgroundColor: '#808000',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    height: '100px',
    padding: 0,
  };

  const logoContainerStyle = {
    justifySelf: 'end',
    paddingTop: 0,
    marginTop: 0,
  };

  const logoImgStyle = {
    width: '100px',
    height: 'auto',
    objectFit: 'contain',
  };

  const sectionStyle = {
    display: 'grid',
    justifyItems: 'start',
    textAlign: 'left',
    paddingLeft: '10px',
    margin: 0,
  };

  const textStyle = {
    margin: 0,
    padding: 0,
    lineHeight: 1.5,
  };

  const underlinedText = {
    ...textStyle,
    textDecoration: 'underline',
  };

  return (
    <footer style={footerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Rucher de Stoqueu Logo" style={logoImgStyle} />
      </div>

      <div style={sectionStyle}>
        <p style={underlinedText}>Où nous trouver?</p>
        <p style={textStyle}>Rue du Hameau 45</p>
        <p style={textStyle}>4920 Aywaille</p>
      </div>

      <div style={sectionStyle}>
        <p style={textStyle}>Conditions générales de vente (C.G.V.)</p>
        <p style={textStyle}>Politique de confidentialité</p>
        <p style={textStyle}>Livraison</p>
      </div>
    </footer>
  );
}

export default Footer;
