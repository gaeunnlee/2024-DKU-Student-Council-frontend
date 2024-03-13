import { main, cafeteria } from '@api/main/main';
import { useQuery } from 'react-query';

export const useGetMain = () => {
   return useQuery(['main'], () => main());
};

export const useGetCafeteria = () => {
   return useQuery(['cafeteria'], () => cafeteria());
};
