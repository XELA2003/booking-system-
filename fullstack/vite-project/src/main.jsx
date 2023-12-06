// index.js ou main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './components/AuthContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Créez une racine.

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
