import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './routes/Login';
import { AdminLayout } from './routes/admin/AdminLayout';
import { AdminUpload } from './routes/admin/Upload';
import { AdminAudit } from './routes/admin/Audit';
import { VerifierLayout } from './routes/verifier/VerifierLayout';
import { VerifyPage } from './routes/verifier/Verify';
import { VerifierAudit } from './routes/verifier/Audit';
import { NotFound } from './routes/NotFound';
import { Guard } from './security/Guard';
import { AppLayout } from './components/AppLayout';
import { HeroSection } from './components/HeroSection';

// Lazy import must be defined before usage to avoid TDZ errors at module init.
const RegistryHiddenLazy = React.lazy(() => import('./routes/admin/RegistryHidden').then(m => ({ default: m.RegistryHidden })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout><HeroSection /></AppLayout>
  },
  {
    path: '/login',
    element: <AppLayout><LoginPage /></AppLayout>
  },
  {
    path: '/verify',
    element: <AppLayout><VerifyPage /></AppLayout>
  },
  {
    path: '/features',
    element: <AppLayout><HeroSection /></AppLayout> // Placeholder, replace with FeaturesPage if available
  },
  {
    path: '/results',
    element: <AppLayout><HeroSection /></AppLayout> // Placeholder, replace with ResultsPage if available
  },
  {
    path: '/admin',
    element: <AppLayout><Guard role="ADMIN"><AdminLayout /></Guard></AppLayout>,
    children: [
      { index: true, element: <Navigate to="upload" replace /> },
      { path: 'upload', element: <AdminUpload /> },
      { path: 'audit', element: <AdminAudit /> },
      { path: 'registry', element: <React.Suspense fallback={null}><RegistryHiddenLazy /></React.Suspense> }
    ]
  },
  {
    path: '/verifier',
    element: <AppLayout><Guard role="VERIFIER"><VerifierLayout /></Guard></AppLayout>,
    children: [
      { index: true, element: <Navigate to="verify" replace /> },
      { path: 'verify', element: <VerifyPage /> },
      { path: 'audit', element: <VerifierAudit /> }
    ]
  },
  {
    path: '/_registry',
    element: <AppLayout><Guard role="ADMIN"><React.Suspense fallback={null}><RegistryHiddenLazy /></React.Suspense></Guard></AppLayout>
  },
  {
    path: '*',
    element: <AppLayout><NotFound /></AppLayout>
  }
]);

// moved above
