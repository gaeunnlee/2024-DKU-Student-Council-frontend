import ModalProvider from '@components/ui/modal/modal-provider';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
