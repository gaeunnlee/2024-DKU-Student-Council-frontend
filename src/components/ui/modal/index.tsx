import React from 'react';
import { useModal } from 'hooks/useModal';
import { IWithReactChildren } from 'interfaces/default-interfaces';

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
         <div className='absolute left-[50%] top-[50%] z-50 min-w-[250px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-3 shadow-sm'>
            <header className='h-56px rounded-t-20px flex w-full items-center justify-center bg-white'>
               <div className='z-1 pointer-events-none w-full'>{title}</div>
            </header>
            <div />
            {children}
            <div className='flex flex-col gap-2'>
               <button
                  className='h-56px rounded-b-20px bg-tp-gray100 text-tp-gray500 w-full text-base font-bold'
                  onClick={() => {
                     accept?.onClick();
                     close();
                  }}
               >
                  {accept?.text}
               </button>
               <button
                  className='h-56px rounded-b-20px bg-tp-gray100 text-tp-gray500 w-full text-base font-bold'
                  onClick={() => {
                     cancel?.onClick();
                     close();
                  }}
               >
                  {cancel?.text}
               </button>
            </div>
         </div>
      </>
   );
}

Modal.Overlay = function Overlay() {
   const { close } = useModal();
   return <div className='absolute right-0 top-0 z-0 h-full w-full bg-black opacity-20' onClick={close} />;
};
