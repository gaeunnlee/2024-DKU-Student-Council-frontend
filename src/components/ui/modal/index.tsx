import React from 'react';
import { useModal } from 'hooks/useModal';
import { IWithReactChildren } from 'interfaces/default-interfaces';
import Button from '../button';

export interface ModalProps {
   title?: string;
   accept?: {
      text: string;
      onClick: () => void;
   };
   cancel?: {
      text: string;
      onClick: () => void;
   };
}

export default function Modal({ title, children, accept, cancel }: ModalProps & IWithReactChildren) {
   const { close } = useModal();

   return (
      <>
         <Modal.Overlay />
         <div className='absolute left-[50%] top-[50%] z-50 min-w-[250px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-3 shadow-sm py-4'>
            <header className='rounded-t-20px flex w-full items-center justify-center bg-white'>
               <h4 className='z-1 pointer-events-none w-full'>{title}</h4>
            </header>
            <div />
            <div className='my-4 mx-2'>{children}</div>
            <div className='flex flex-col gap-2'>
               {accept && (
                  <Button
                     variant='primary'
                     onClick={() => {
                        accept?.onClick();
                        close();
                     }}
                  >
                     {accept?.text ?? '확인'}
                  </Button>
               )}
               {cancel && (
                  <Button
                     onClick={() => {
                        cancel?.onClick();
                        close();
                     }}
                  >
                     {cancel?.text ?? '취소'}
                  </Button>
               )}
            </div>
         </div>
      </>
   );
}

Modal.Overlay = function Overlay() {
   const { close } = useModal();
   return <div className='absolute right-0 top-0 z-0 h-full w-full bg-black opacity-20' onClick={close} />;
};
