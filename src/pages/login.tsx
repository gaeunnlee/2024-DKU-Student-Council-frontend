import React, { Fragment } from 'react';
import LoginForm from 'components/login/form';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';

export default function Login() {
   const { setLayout } = useLayout();

   const headingStyle = 'mt-7 box-content h-[126px] text-center font-extrabold';

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         heading: 'Login',
         subHeading: '단국대학교 총학생회 로그인',
         headingStyle: headingStyle,
         headingText: 'text-2xl mb-[19px]',
         subHeadingText: 'text-base',
         margin: '',
         rounded: true,
      });
   });

   return (
      <Fragment>
         <LoginForm />
      </Fragment>
   );
}
