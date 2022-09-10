import React, {useState, useEffect} from 'react';
import './App.css';
import { LibrasGramos } from './components/LibrasGramos';
import { LibrasKilos } from './components/LibrasKilos';
import { LibrasOnzas } from './components/LibrasOnzas';

function App() {
  return (
    <>
      <header className='header'>
        <h1 className='title'>Convertor de unidades de peso</h1>
      </header>
      <main className='main-container'>
        <LibrasOnzas />
        <LibrasKilos />
        <LibrasGramos />
      </main>
    </>
  );
}

export default App;
