import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './pages/App.tsx';
import { AuthProvider } from './pages/provider/auth-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
