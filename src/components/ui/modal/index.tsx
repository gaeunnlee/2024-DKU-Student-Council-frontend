import { Button } from '@components/ui/button';
import { useModal } from '@hooks/useModal';
import { IWithReactChildren } from '@shared/interfaces/default-interfaces';
import { motion } from 'framer-motion';
import React from 'react';

export interface ModalProps {
   title?: string;
   accept?: {
      text: string;
      onClick: () => void;
   };
   cancel?: {
      text: string;
      onClick: () => void;
      disable?: boolean;
   };
   disableCancle?: boolean;
}

export default function Modal({
   title,
   children,
   accept,
   cancel,
   disableCancle,
}: ModalProps & IWithReactChildren) {
   const { close } = useModal();

   return (
      <>
         <Modal.Overlay disableCancle={disableCancle ?? false} />
         <motion.div
            className='fixed top-[50%] z-50 min-w-[300px] max-w-[calc(100%-1rem)] rounded-md bg-white p-4 shadow-sm'
            animate={{
               scale: [0, 1],
               translateY: '-50%',
            }}
            style={{
               left: '50%',
               translateX: '-50%',
            }}
         >
            <header className='rounded-t-20px flex w-full items-center justify-center bg-white'>
               <h4 className='w-full font-bold text-lg'>{title}</h4>
            </header>
            <div />
            <div className='my-4 mx-2 overflow-hidden'>{children}</div>
            <div className='flex flex-col gap-2'>
               {accept && (
                  <Button
                     size='md'
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
                     size='md'
                     onClick={() => {
                        cancel?.onClick();
                        close();
                     }}
                  >
                     {cancel?.text ?? '취소'}
                  </Button>
               )}
            </div>
         </motion.div>
      </>
   );
}

Modal.Overlay = function Overlay({ disableCancle }: { disableCancle: boolean }) {
   const { close } = useModal();
   return (
      <motion.div
         className='fixed right-0 top-0 z-0 h-full w-full bg-black'
         onClick={disableCancle ? () => {} : close}
         animate={{ opacity: [0, 0.2] }}
      />
   );
};
