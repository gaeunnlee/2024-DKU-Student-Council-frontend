import React from 'react';
import { useModal } from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';

export const useDefaultModal = () => {
   const { open } = useModal();
   const navigate = useNavigate();

   const alertModal = (content: string) => (<div>{content}</div>) as React.ReactNode;
   const alertOption = ({ acceptEvent, disableCancle }: { acceptEvent: string; disableCancle?: boolean }) => {
      return {
         title: '알림',
         accept: {
            text: '확인',
            onClick: () => {
               navigate(acceptEvent);
            },
         },
         disableCancle: disableCancle,
      };
   };

   const modal = ({
      content,
      acceptEvent,
      disableCancle,
   }: {
      content: string;
      acceptEvent: string;
      disableCancle?: boolean;
   }) => {
      open(alertModal(content), alertOption({ acceptEvent, disableCancle }));
   };

   return { modal };
};
