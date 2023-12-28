import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css"
import { BrowserRouter } from 'react-router-dom';
import 'aos/dist/aos.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
 
);


