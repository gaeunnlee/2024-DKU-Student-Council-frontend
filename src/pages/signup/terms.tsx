import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import { useAlert } from '../../hooks/useAlert';
import Checkbox from 'components/ui/checkbox';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import Button from 'components/ui/button';
import Heading from 'components/ui/typo/heading';
import Box from 'components/ui/box';
import Text from 'components/ui/typo/text';

export default function SignupTerms() {
   const { alert } = useAlert();
   const { setLayout } = useLayout();

   const [agreeCheck, setAgreeCheck] = useState([false, false, false]);
   const navigate = useNavigate();

   const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const newAgreeCheck = [...agreeCheck];
      if (name === 'agree1') {
         newAgreeCheck[0] = !newAgreeCheck[0];
      } else if (name === 'agree2') {
         newAgreeCheck[1] = !newAgreeCheck[1];
      } else if (name === 'agree3') {
         newAgreeCheck[2] = !newAgreeCheck[2];
      }
      setAgreeCheck(newAgreeCheck);
   };

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         headingStyle: '',
         margin: '',
         rounded: true,
      });
   });

   const onAllCheckboxChange = () => {
      if (agreeCheck[0] && agreeCheck[1] && agreeCheck[2]) {
         const newAgreeCheck = [false, false, false];
         setAgreeCheck(newAgreeCheck);
      } else {
         const newAgreeCheck = [true, true, true];
         setAgreeCheck(newAgreeCheck);
      }
   };

   const goNext = () => {
      // 체크 여부 확인
      if (agreeCheck[0] && agreeCheck[1] && agreeCheck[2]) {
         navigate(ROUTES.SIGNUP.VERIFY);
      } else {
         alert('약관에 동의해야 회원가입이 가능합니다.');
      }
   };

   return (
      <div className='px-10'>
         <Heading as='h1' className='text-2xl font-extrabold mb-[14px] mt-[53px]'>
            Sign up
         </Heading>
         <Heading as='h2' className='text-base font-extrabold mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' className="text-sm before:content-['●'] flex items-center gap-1">
            이용약관동의
         </Heading>
         <div className='flex flex-col gap-6'>
            <Checkbox
               name='AllAgree'
               checked={agreeCheck[0] && agreeCheck[1] && agreeCheck[2]}
               onChange={onAllCheckboxChange}
               className='ml-auto'
            >
               <Text className='text-[10px] font-semibold'>전체동의하기</Text>
            </Checkbox>
            <Box>
               <Checkbox name='agree1' checked={agreeCheck[0]} onChange={onCheckboxChange}>
                  <Text as='span' className='text-[11px]'>
                     [필수]
                  </Text>
                  <Text as='span' className='text-[11px] text-gray02'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
            <Box>
               <Checkbox name='agree2' checked={agreeCheck[1]} onChange={onCheckboxChange}>
                  <Text as='span' className='text-[11px]'>
                     [필수]
                  </Text>
                  <Text as='span' className='text-[11px] text-gray02'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
            <Box className='mb-8'>
               <Checkbox name='agree3' checked={agreeCheck[2]} onChange={onCheckboxChange}>
                  <Text as='span' className='text-[11px]'>
                     [필수]
                  </Text>
                  <Text as='span' className='text-[11px] text-gray02'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
         </div>
         <Button onClick={goNext} className='rounded-2xl w-full py-3'>
            <Text className='text-base font-bold'>동의 완료</Text>
         </Button>
      </div>
   );
}
