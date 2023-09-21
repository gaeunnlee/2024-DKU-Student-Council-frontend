import React from 'react';
import { AxiosError } from 'axios';
import { useAlert } from 'hooks/useAlert';

export default function Main() {
   const { alert } = useAlert();

   const setError = () => {
      try {
         throw new AxiosError('테스트 에러');
      } catch (error) {
         alert(error as AxiosError);
      }
   };
   return <button onClick={setError}>에러</button>;
}
