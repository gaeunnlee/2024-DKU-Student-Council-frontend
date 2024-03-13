import Modal, { ModalProps } from '@components/ui/modal/index';
import { IWithReactChildren } from '@shared/interfaces/default-interfaces';
import React from 'react';
import ReactDom from 'react-dom';

export const ModalContext = React.createContext({
   setModalContent: (content: React.ReactNode) => {
      console.warn(`setModalContent is ${typeof content}`);
   },
   setOptions: (option: ModalProps) => {
      console.warn(`setOption is ${typeof option}`);
   },
});

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export default function ModalProvider({ children }: IWithReactChildren) {
   const [modalContent, setModalContent] = React.useState<React.ReactNode>(undefined);
   const [options, setOptions] = React.useState<ModalProps>();

   return (
      <ModalContext.Provider value={{ setModalContent, setOptions }}>
         {children}
         {modalContent && ReactDom.createPortal(<Modal {...options}>{modalContent}</Modal>, modalRoot)}
      </ModalContext.Provider>
   );
}
