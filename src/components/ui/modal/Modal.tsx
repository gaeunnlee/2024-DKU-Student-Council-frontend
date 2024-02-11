import React, { useEffect } from 'react';
import { useModal } from 'hooks/useModal';
import { useNavigate } from 'react-router-dom';

export const Modal = ({
   children,
   isShowing,
   target,
   disableCancle,
}: {
   children: React.ReactNode;
   isShowing: boolean;
   target?: string;
   disableCancle?: boolean;
}) => {
   const { open } = useModal();
   const navigate = useNavigate();

   const alertOption = ({ target, disableCancle }: { target?: string; disableCancle?: boolean }) => {
      return {
         title: '알림',
         accept: {
            text: '확인',
            onClick: () => {
               target && navigate(target);
            },
         },
         disableCancle,
      };
   };

   useEffect(() => {
      isShowing && open(children, alertOption({ target, disableCancle }));
   }, [isShowing]);

   return <></>;
};
