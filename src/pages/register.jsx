import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <Header /> 
      <div className="max-w-md w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">S'inscrire</h2>

        <div className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
            {/* Family Name Field */}
            <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                Nom de famille*
            </label>
            <input
                type="text" // Fixed type here
                id="nom"
                name="nom"
                placeholder="Entrez votre nom de famille"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            </div>

          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Entrez votre prénom"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Numéro de téléphone*
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Entrez votre numéro de téléphone"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="rue" className="block text-sm font-medium text-gray-700">
              Rue + numéro*
            </label>
            <input
              type="text"
              id="rue"
              name="rue"
              placeholder="Entrez votre rue + numéro"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="cp" className="block text-sm font-medium text-gray-700">
              Code postal*
            </label>
            <input
              type="text"
              id="cp"
              name="cp"
              placeholder="Entrez votre code postal"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="localite" className="block text-sm font-medium text-gray-700">
              Localité*
            </label>
            <input
              type="text"
              id="localite"
              name="localite"
              placeholder="Entrez votre localité"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <p>*obligatoire</p>

        {/* Google Login Section */}
        <div className="mt-4">
   
            <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Se connecter avec Google
            </button>
          </div>
     
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Register;