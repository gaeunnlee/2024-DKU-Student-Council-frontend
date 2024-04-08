// import { HTTP_ERROR_MESSAGE } from '@constants/error';
import React from 'react';

export interface ErrorProps {
   statusCode?: number;
   resetError?: () => void;
}

const Error = ({ statusCode, resetError }: ErrorProps) => {
   console.log(statusCode);
   return (
      <div className='flex flex-col justify-center items-center'>
         <h1>오류가 발생했습니다</h1>
         <h2>{statusCode}</h2>
         <button onClick={resetError}>다시 시도하기</button>
      </div>
   );
};

export default Error;
