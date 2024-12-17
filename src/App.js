import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cartes from './Cartes';
import Grille from './Grille';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h2>Memory Game </h2>
      <div>
        <Grille/>
      </div>
    </div>
    
  );
}

export default App;