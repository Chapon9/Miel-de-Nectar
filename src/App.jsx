import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accueil from './pages/accueil';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import Commande from './pages/commande';
import User from './pages/user';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;






