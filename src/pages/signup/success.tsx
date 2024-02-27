import React from 'react';
import SvgIcon from 'components/common/icon/SvgIcon';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import Button from 'components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';

export default function SignupSuccess() {
   const { setLayout } = useLayout();
   const navigate = useNavigate();

   const handleGoLogin = () => {
      navigate(ROUTES.LOGIN);
   };

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         margin: 'mt-[140px]',
         rounded: true,
      });
   });
   return (
      <div className='w-full mt-[120px]'>
         <div className='flex flex-col items-center justify-center gap-3'>
            <SvgIcon id='success' width={38} height={38} />
            <h2 className='font-bold text-xl'>회원가입 완료</h2>
            <p className='text-xl mb-4'>회원가입이 완료되었습니다.</p>
            <Button variant='default' size='md' borderRadius='20px' onClick={handleGoLogin}>
               로그인하러 가기
            </Button>
         </div>
      </div>
   );
}
