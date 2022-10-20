import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h3>React.js Calculator</h3>
      <Calculator/>
    </div>
  </React.StrictMode>
);
reportWebVitals();
