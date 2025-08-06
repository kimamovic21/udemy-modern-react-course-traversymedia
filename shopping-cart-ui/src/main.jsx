import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProductProvider } from '../context/ProductContext.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);