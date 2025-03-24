import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  
import './commande.css'; // Importing the CSS file

const Commande = () => {
  const orderNumber = "123456789"; // Example order number
  const products = [
    { name: 'Miel 250g', quantity: 1, price: 8.00 },
    { name: 'Miel au safran', quantity: 1, price: 10.00 },
    { name: 'Livraison', quantity: 1, price: 0.00 },
    { name: 'Livraison', quantity: 1, price: 3.00 }
  ];

  // Calculate total
  const total = products.reduce((acc, product) => acc + product.quantity * product.price, 0).toFixed(2);

  return (
    <div>
      <Header />
      
      <div className="commande-container">
        <h1>Merci de votre achat !</h1>

        <div className="commande-summary">
          <p className="order-number">Votre numéro de commande est le <strong>{orderNumber}</strong>.</p>

          <div className="order-items">
            <h2>Détails de la commande :</h2>
            <ul>
              {products.map((product, index) => (
                <li key={index} className="order-item">
                  <span>{product.name}</span>{product.quantity} x €{product.price.toFixed(2)} = €{(product.quantity * product.price).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-total">
            <h3>Total de la commande : <strong>€{total}</strong></h3>
          </div>

          <p>Pour toute question concernant cette commande, <a href="./contact">contactez-nous</a>.</p>
        </div>

        <div className="cta">
          <h2>Suivi de la commande</h2>
          <p>Vous recevrez un email dès que votre commande sera expédiée. Vous pouvez également suivre l'état de votre commande dans votre compte.</p>
          
          {/* Changed button to a link */}
          <a href="./" className="cta-button">Retour à l'accueil</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Commande;

