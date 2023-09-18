import React from 'react';
import ReactDom from 'react-dom';
import Modal, { ModalProps } from '.';
import { IWithReactChildren } from 'interfaces/default-interfaces';

export const ModalContext = React.createContext({
   modalContent: undefined as React.ReactNode,
   setModalContent: (content: React.ReactNode) => {
      console.warn(`setModalContent is ${typeof content}`);
   },
   setOptions: (option: ModalProps) => {
      console.warn(`setOption is ${typeof option}`);
   },
   isOpen: false,
});

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export default function ModalProvider({ children }: IWithReactChildren) {
   const [modalContent, setModalContent] = React.useState<React.ReactNode>(undefined);
   const [isOpen, setIsOpen] = React.useState(false);
   const [options, setOptions] = React.useState<ModalProps>();

   React.useEffect(() => {
      if (!modalContent) {
         setIsOpen(false);
      } else {
         setIsOpen(true);
      }
   }, [modalContent]);

   return (
      <ModalContext.Provider value={{ modalContent, setModalContent, isOpen, setOptions }}>
         {children}
         {isOpen && ReactDom.createPortal(<Modal {...options}>{modalContent}</Modal>, modalRoot)}
      </ModalContext.Provider>
   );
}
