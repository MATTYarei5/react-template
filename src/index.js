import ReactDOM from 'react-dom';
import React from 'react';

import CartProvider from './components/Cart/CartContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

