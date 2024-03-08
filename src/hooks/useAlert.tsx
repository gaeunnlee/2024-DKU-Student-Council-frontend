import React from 'react';
import { AxiosError, isAxiosError } from 'axios';
import { useModal } from './useModal';
import { ModalProps } from 'components/ui/modal';
import { useNavigate } from 'react-router-dom';

export const useAlert = () => {
   const { open } = useModal();
   const navigate = useNavigate();

   const alertModal = (content: string | undefined) =>
      (
         <div>
            {typeof content === 'undefined' ? (
               <div>
                  알 수 없는 오류!
                  <br />
                  관리자에게 문의하세요.
               </div>
            ) : (
               content
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
         console.log(1);
         open(alertModal(error), alertOption);
      } else if (error instanceof AxiosError && error.response?.data.message) {
         console.log(2);
         if (error.response?.data.code === 'NotGrantedException') {
            open(alertModal('로그인이 필요한 서비스입니다.'), alertOption);
            navigate('/login');
         } else {
            open(alertModal(error.response?.data.message), alertOption);
         }
      } else if (isAxiosError(error)) {
         console.log(3);
         open(alertModal(error.message), alertOption);
         console.log(error);
      } else {
         console.log(4);
         open(alertModal('알 수 없는 에러가 발생했습니다.'), alertOption);
         console.log(error);
      }
   };

   return { alert };
};
