import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

try {
  console.log('Utility Hub Pro: Initializing...');
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (e) {
  console.error('Top-level render error:', e);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `<div style="padding: 2rem; text-align: center; color: red; font-family: sans-serif;">
      <h1>Something went wrong</h1>
      <p>The application failed to start. Please try refreshing the page.</p>
    </div>`;
  }
}
