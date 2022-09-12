import React, {useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <h1 className='title'>Selecciona una opción</h1>
      </header>
      <main className='main-container'>
        <div className='main-container-links'>
          <Link to="/" className='main-links'>Inicio</Link>
          <Link to="/conversiones" className='main-links'>Conversiones de unidades de peso</Link>
          <Link to="/clinica" className='main-links'>Clínica dental</Link>
        </div>
      </main>
      <Outlet />
    </>
  );
}

export default App;
