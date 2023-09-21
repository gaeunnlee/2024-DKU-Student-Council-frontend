import React from 'react';
import { AxiosError, isAxiosError } from 'axios';
import { useModal } from './useModal';
import { ModalProps } from 'components/ui/modal';

export const useAlert = () => {
   const { open } = useModal();

   const alertModal = (content: string) => (<div>{content}</div>) as React.ReactNode;
   const alertOption: ModalProps = {
      title: '오류',
      accept: {
         text: '확인',
         onClick: () => {},
      },
   };

   const alert = (error: string | AxiosError | Error) => {
      if (typeof error === 'string') {
         open(alertModal(error), alertOption);
      } else if (isAxiosError(error) || error instanceof Error) {
         open(alertModal(error.message), alertOption);
      } else {
         open(alertModal('알 수 없는 에러가 발생했습니다.'), alertOption);
      }
   };

   return { alert };
};
