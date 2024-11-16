import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Provider/RouterProvider/Routes.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StatusProvider from './Provider/StatusProvider/StatusProvider.jsx';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StatusProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StatusProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
