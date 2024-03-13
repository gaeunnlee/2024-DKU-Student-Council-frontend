import Box from '@components/ui/box';
import { Button } from '@components/ui/button';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetIdPw() {
   const { setLayout } = useLayout();
   const navigate = useNavigate();

   const handleFindId = () => {
      navigate(ROUTES.RESET.ID);
   };

   const handleVerifyPw = () => {
      navigate(ROUTES.RESET.PW_VERIFY);
   };

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.LOGIN.HEAD,
         subHeadingText: HEADING_TEXT.RESET_ID_PW.SUBHEAD,
         headingStyle: HEADING_STYLE.RESET.HEAD,
         subHeadingStyle: HEADING_STYLE.RESET.SUBHEAD,
         rounded: true,
      });
   });

   return (
      <div className='flex flex-col gap-5 px-5 mb-[117px] mt-[57px]'>
         <Box className='mb-4'>
            <h3 className='mb-[10px]'>ID 찾기</h3>
            <p className='whitespace-pre-line text-[13px]'>
               {'잃어버린 ID에 대해서 휴대전화 번호를 입력하면,\n 문자를 통해서 ID를 제공 받습니다.'}
            </p>
         </Box>
         <Button size='xl' variant='default' className='rounded-[30px]' onClick={handleFindId}>
            ID 찾기
         </Button>
         <Box className='mb-4'>
            <h3 className='mb-[10px]'>PW 재설정</h3>
            <p className='text-[13px] whitespace-pre-line'>
               {
                  '잃어버린 PW에 대해서 휴대전화번호를 입력하면,\n 인증번호 제공을 통해 새로운 비밀번호를 설정합니다.'
               }
            </p>
         </Box>
         <Button size='xl' variant='default' className='rounded-[30px]' onClick={handleVerifyPw}>
            PW 재설정
         </Button>
      </div>
   );
}
