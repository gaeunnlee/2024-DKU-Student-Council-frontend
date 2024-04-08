import ModalProvider from '@components/ui/modal/modal-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 0,
         refetchOnWindowFocus: false,
         throwOnError: true,
      },
   },
});

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ModalProvider>
            <BrowserRouter>
               <Router />
            </BrowserRouter>
         </ModalProvider>
      </QueryClientProvider>
   );
}
