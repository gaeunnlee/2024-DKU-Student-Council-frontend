import React from 'react';
import { AxiosError, isAxiosError } from 'axios';
import { useModal } from './useModal';
import { ModalProps } from 'components/ui/modal';
import { MessagedError } from 'api/axios-interface';

export const useAlert = () => {
   const { open } = useModal();

   const alertModal = (content: string | undefined) =>
      (
         <div>
            {content ?? (
               <div>
                  알 수 없는 오류!
                  <br />
                  관리자에게 문의하세요.
               </div>
            )}
         </div>
      ) as React.ReactNode;
   const alertOption: ModalProps = {
      title: '알림',
      accept: {
         text: '확인',
         onClick: () => {},
      },
   };

   const alert = (error: string | AxiosError | unknown) => {
      if (typeof error === 'string') {
         open(alertModal(error), alertOption);
      } else if (isAxiosError<MessagedError>(error)) {
         open(alertModal(error.response?.data.msg), alertOption);
      } else if (isAxiosError<unknown>(error)) {
         open(alertModal(error.message), alertOption);
         console.log(error);
      } else {
         open(alertModal('알 수 없는 에러가 발생했습니다.'), alertOption);
         console.log(error);
      }
   };

   return { alert };
};
