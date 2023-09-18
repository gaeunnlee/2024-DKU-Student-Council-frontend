import React from 'react';
import Router from './Router';
import ModalProvider from 'components/ui/modal/modal-provider';

export default function App() {
   return (
      <ModalProvider>
         <Router />
      </ModalProvider>
   );
}
