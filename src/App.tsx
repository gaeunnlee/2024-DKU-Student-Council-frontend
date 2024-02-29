import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './Router';
import ModalProvider from 'components/ui/modal/modal-provider';
import ChakraUIProvider from 'components/common/chakra';

const queryClient = new QueryClient();

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ModalProvider>
            <ChakraUIProvider>
               <Router />
            </ChakraUIProvider>
         </ModalProvider>
      </QueryClientProvider>
   );
}
