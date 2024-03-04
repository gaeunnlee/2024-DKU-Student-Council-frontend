import React, { Fragment } from 'react';
import LoginForm from 'components/login/form';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { HeadingStyle } from 'constants/heading';

export default function Login() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: 'Login',
         subHeadingText: '단국대학교 총학생회 로그인',
         headingStyle: HeadingStyle.login.headingStyle,
         subHeadingStyle: HeadingStyle.login.subHeadingStyle,
         margin: '0px',
         rounded: true,
      });
   });

   return (
      <Fragment>
         <LoginForm />
      </Fragment>
   );
}
