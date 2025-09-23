import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppErrorBoundary from './components/AppErrorBoundary';
import App from './App.tsx';
import './index.css';

const REDIRECT_STORAGE_KEY = 'doghouse:redirect-path';

if (typeof window !== 'undefined') {
  try {
    const redirectPath = window.sessionStorage.getItem(REDIRECT_STORAGE_KEY);
    if (redirectPath) {
      window.sessionStorage.removeItem(REDIRECT_STORAGE_KEY);
      const normalisedPath = redirectPath.startsWith('/') ? redirectPath : `/${redirectPath}`;
      window.history.replaceState(null, '', normalisedPath);
    }
  } catch (error) {
    console.warn('Failed to restore intended route from session storage', error);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
