import SvgIcon from '@components/common/icon/SvgIcon';
import { Button } from '@components/ui/button';
import { ROUTES } from '@constants/route';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupSuccess() {
   const navigate = useNavigate();

   const handleGoLogin = () => {
      navigate(ROUTES.LOGIN);
   };

   return (
      <div className='w-full mt-[120px]'>
         <div className='flex flex-col items-center justify-center gap-3'>
            <SvgIcon id='success' width={38} height={38} />
            <h2 className='font-bold text-xl'>회원가입 완료</h2>
            <p className='text-xl mb-4'>회원가입이 완료되었습니다.</p>
            <Button
               variant='default'
               asChild={true}
               size='md'
               className='rounded-[20px]'
               onClick={handleGoLogin}
            >
               로그인하러 가기
            </Button>
         </div>
      </div>
   );
}
