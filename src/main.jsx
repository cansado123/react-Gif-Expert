import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import  './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  //Cambiamos el componente por este otro hace referencia a Gif.
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>,
);
