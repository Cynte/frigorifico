import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import spanish from './Resources/Languages/spanish.json';
import english from './Resources/Languages/english.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

const basename = process.env.PUBLIC_URL;

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/' element={<App language={spanish} />} />
        <Route path='/en' element={<App language={english} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
