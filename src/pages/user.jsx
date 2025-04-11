import './user.css'; // Importing the CSS file


const User = () => {
  return (
    <div>


      
      <div className="up">
`       <h2 className="client">Informations personnelles</h2>
        <h2 className="commandes">Commandes</h2>
      </div>

      <div className="user">
          <div className="coordonnees">
            <p>M. /</p>
            <p>Nom de famille</p>
            <p>Prénom</p>
            <p>Numéro de téléphone</p>
            <p>Rue + numéro</p>
            <p>Code postal</p>
            <p>Localité</p>           
            <p>Adresse email</p>
            <p>Mot de passe</p>
          </div>
          <div  className="coord">
            <p>MME.</p>
            <p>Poncin</p>
            <p>Charlotte</p>
            <p>0472105930</p>
            <p>Rue des Sorbiers 9b</p>
            <p>4050</p>
            <p>Chaudfontaine</p>
            <p>charlotteponcin@hotmail.com</p>
            <p>*****</p>
          </div>`

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


    </div>
  );
};

export default User;
