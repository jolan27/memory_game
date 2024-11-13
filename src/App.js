import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cartes from './Cartes';
import Grille from './Grille';

function App() {
  return (
    <div>
      <h3>Memory Game </h3>
      <div>
        <Grille/>
      </div>
    </div>
    
  );
}

export default App;