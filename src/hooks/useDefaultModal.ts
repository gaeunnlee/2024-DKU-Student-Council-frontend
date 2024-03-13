import { useModal } from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';

export const useDefaultModal = () => {
   const { open } = useModal();
   const navigate = useNavigate();

   const alertOption = ({ target, disableCancle }: { target: string; disableCancle?: boolean }) => {
      return {
         title: '알림',
         accept: {
            text: '확인',
            onClick: () => {
               navigate(target);
            },
         },
         disableCancle,
      };
   };

   const modal = ({
      content,
      target,
      disableCancle,
   }: {
      content: string;
      target: string;
      disableCancle?: boolean;
   }) => {
      open(content, alertOption({ target, disableCancle }));
   };

   return { modal };
};
