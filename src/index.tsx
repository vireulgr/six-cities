import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/main/main.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersQuantity='5' />
  </React.StrictMode>
);
