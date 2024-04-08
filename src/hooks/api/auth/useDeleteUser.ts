import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { del } from '@libs/api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useDeleteUser = () => {
   //TODO) 탈퇴하였습니다 -> 토스트 추가
   const navigate = useNavigate();
   return useMutation({
      mutationFn: () => del(API_PATH.USER.ME),
      onSuccess: () => {
         navigate(ROUTES.MAIN);
      },
   });
};
