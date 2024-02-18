import React from 'react';
import Router from './Router';
import ModalProvider from 'components/ui/modal/modal-provider';
import { ChakraBaseProvider } from '@chakra-ui/react';

export default function App() {
   return (
      <ModalProvider>
         <ChakraBaseProvider>
            <Router />
         </ChakraBaseProvider>
      </ModalProvider>
   );
}
