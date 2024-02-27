import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import Heading from 'components/ui/typo/heading';
import { useAlert } from 'hooks/useAlert';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';
import InfoForm from 'components/signup/info';

export default function SignupInfo() {
   const navigate = useNavigate();
   const location = useLocation();

   const { alert } = useAlert();
   const { state } = location;
   const data = state.data ?? null;
   const signupToken = data?.signupToken;
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         heading: '',
         subHeading: '',
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
         margin: 'mt-[41px]',
         rounded: true,
      });
   });

   useEffect(() => {
      if (!data) {
         alert('학생 인증을 완료해주세요');
         navigate(ROUTES.SIGNUP.VERIFY);
      }
   }, [data, navigate]);

   return (
      <div className='flex flex-col px-10 pt-12'>
         <Heading as='h1' size='lg' className='font-extrabold mb-[14px]'>
            Sign up
         </Heading>
         <Heading as='h2' size='md' className='text-base font-extrabold mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' size='xs' className="text-sm before:content-['●'] flex items-center gap-1 mb-8">
            회원 정보 입력
         </Heading>
         <InfoForm signupToken={signupToken} />
      </div>
   );
}
