import LoginForm from '@components/login/form';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React, { Fragment } from 'react';

export default function Login() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.LOGIN.HEAD,
         subHeadingText: HEADING_TEXT.LOGIN.SUBHEAD,
         headingStyle: HEADING_STYLE.LOGIN.HEAD,
         subHeadingStyle: HEADING_STYLE.LOGIN.SUBHEAD,
         rounded: true,
      });
   });

   return (
      <Fragment>
         <LoginForm />
      </Fragment>
   );
}
