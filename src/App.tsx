import ModalProvider from '@components/ui/modal/modal-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import Router from '@/Router';

const queryClient = new QueryClient();

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ModalProvider>
            <Router />
         </ModalProvider>
      </QueryClientProvider>
   );
}
