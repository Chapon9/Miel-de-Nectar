import React from 'react';
import Header from '../components/header';  
import Footer from '../components/footer';  

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <Header /> 

      <div className="max-w-md w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Se connecter à votre compte</h2>

        <div className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email
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
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Google Login Section */}
          <div className="mt-4">
            <p className="text-center text-sm text-gray-600">Se connecter avec</p>
            <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Google
            </button>
          </div>
        </div>
      </div>

      <Footer /> 
    </div>
  );
};

export default Login;
