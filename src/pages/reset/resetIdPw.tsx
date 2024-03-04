import Box from 'components/ui/box';
import Text from 'components/ui/typo/text';
import Button from 'components/ui/button';
import Heading from 'components/ui/typo/heading';
import { HEADING_TEXT, HEADING_STYLE } from 'constants/heading';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import React from 'react';

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
            <Heading as='h3' size='md' marginBottom='10px'>
               ID 찾기
            </Heading>
            <Text fontSize='13px' className='whitespace-pre-line'>
               {'잃어버린 ID에 대해서 휴대전화 번호를 입력하면,\n 문자를 통해서 ID를 제공 받습니다.'}
            </Text>
         </Box>
         <Button size='xl' variant='default' borderRadius='30px' onClick={handleFindId}>
            ID 찾기
         </Button>
         <Box className='mb-4'>
            <Heading as='h3' size='md' marginBottom={'10px'}>
               PW 재설정
            </Heading>
            <Text fontSize='13px' className='whitespace-pre-line'>
               {
                  '잃어버린 PW에 대해서 휴대전화번호를 입력하면,\n 인증번호 제공을 통해 새로운 비밀번호를 설정합니다.'
               }
            </Text>
         </Box>
         <Button size='xl' variant='default' borderRadius='30px' onClick={handleVerifyPw}>
            PW 재설정
         </Button>
      </div>
   );
}
