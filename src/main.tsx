import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { LoadingBackdrop } from './shared/components/backdrop';
import 'virtual:windi.css';
import './shared/providers/database';
import QueryProvider from './shared/providers/queryProvider';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <Suspense fallback={<LoadingBackdrop />}>
        <HashRouter basename={import.meta.env.BASE_URL}>
          <App />
        </HashRouter>
      </Suspense>
    </QueryProvider>
  </React.StrictMode>
);
