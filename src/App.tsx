import React from 'react';
import Router from './Router';
import ModalProvider from 'components/ui/modal/modal-provider';
import ChakraUIProvider from 'components/common/chakra';

export default function App() {
   return (
      <ModalProvider>
         <ChakraUIProvider>
            <Router />
         </ChakraUIProvider>
      </ModalProvider>
   );
}
