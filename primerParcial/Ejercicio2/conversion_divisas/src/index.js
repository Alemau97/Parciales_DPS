import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Conversiones from './Conversiones';
import Clinica from './Clinica';
import Home from './Home';

export default function AppCont() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='conversiones' element={<Conversiones />}/>
          <Route path='clinica' element={<Clinica />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppCont />);
