import Box from '@components/ui/box';
import { Button } from '@components/ui/button';
import { HEADING_TEXT } from '@constants/heading';
import { ROUTES } from '@constants/route';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Gnb, GnbGoBack } from '@/components/common/gnb';
import { GnhSubtitle, GnhTitle } from '@/components/common/gnh';
import { ContentSection, HeaderSection } from '@/components/layouts';

export default function ResetIdPw() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const handleFindId = () => {
      navigate(`${ROUTES.RESET.ID}?${searchParams.toString()}`);
   };

   const handleVerifyPw = () => {
      navigate(`${ROUTES.RESET.PW_VERIFY}?${searchParams.toString()}`);
   };

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <HeaderSection className="text-center pt-4 pb-[55px]">
            <GnhTitle className='mb-[19px]'>{HEADING_TEXT.LOGIN.HEAD}</GnhTitle>
            <GnhSubtitle>{HEADING_TEXT.RESET_ID_PW.SUBHEAD}</GnhSubtitle>
         </HeaderSection>
         <ContentSection showNav={true} className="items-center">
            <section className='mb-5'>
               <Box className='mb-4' type='shadow'>
                  <h3 className='text-xl font-extrabold mb-[10px]'>ID 찾기</h3>
                  <p className='whitespace-pre-line text-[13px]'>
                     {'잃어버린 ID에 대해서 휴대전화 번호를 입력하면,\n 문자를 통해서 ID를 제공 받습니다.'}
                  </p>
               </Box>
               <Button size='xl' variant='default' className='rounded-[30px]' onClick={handleFindId}>
               ID 찾기
               </Button>
            </section>
            <Box className='mb-4' type='shadow'>
               <h3 className='text-xl font-extrabold mb-[10px]'>PW 재설정</h3>
               <p className='text-[13px] whitespace-pre-line'>
                  {
                     '잃어버린 PW에 대해서 휴대전화번호를 입력하면,\n 인증번호 제공을 통해 새로운 비밀번호를 설정합니다.'
                  }
               </p>
            </Box>
            <Button size='xl' variant='default' className='rounded-[30px]' onClick={handleVerifyPw}>
            PW 재설정
            </Button>
         </ContentSection>
      </React.Fragment>
   );
}
