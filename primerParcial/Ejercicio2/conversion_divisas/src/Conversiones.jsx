import React, {useState, useEffect} from 'react';
import './App.css';
import { LibrasGramos } from './components/LibrasGramos';
import { LibrasKilos } from './components/LibrasKilos';
import { LibrasOnzas } from './components/LibrasOnzas';

function Conversiones() {
  return (
    <>
      <header className='header'>
        <h1 className='title'>Convertor de unidades de peso</h1>
      </header>
      <div className='main-container'>
        <LibrasOnzas />
        <LibrasKilos />
        <LibrasGramos />
      </div>
    </>
  );
}

export default Conversiones;