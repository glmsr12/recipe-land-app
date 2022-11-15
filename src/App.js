import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Favorite from './components/Favorite/Favorite';
import HomePage from './components/HomePage/HomePage';
import RandomRecipes from './components/RandomRecipes/RandomRecipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/favorites" element={<Favorite />} />

          <Route exact path="/randomrecipes" element={<RandomRecipes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
