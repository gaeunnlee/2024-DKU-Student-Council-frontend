import { ModalProps } from 'components/ui/modal';
import { ModalContext } from 'components/ui/modal/modal-provider';
import React from 'react';

/**
 * @description 모달을 사용하기 위한 커스텀 훅
 */
export const useModal = () => {
   const { setModalContent, setOptions } = React.useContext(ModalContext);

   const open = (content: React.ReactNode, option?: ModalProps) => {
      setModalContent(content);
      option && setOptions(option);
   };

   const close = () => {
      setModalContent(null);
      setOptions({});
   };

   return { open, close };
};
