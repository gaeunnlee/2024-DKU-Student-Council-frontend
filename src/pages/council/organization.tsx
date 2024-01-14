import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';

export default function Organization() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         topHeader: true,
         title: '총학생회',
         backButton: true,
         isMain: false,
         heading: '총학생회',
         subHeading: '조직도',
         fullscreen: false,
         rounded: true,
      });
   });

   return (
      <>
         <h1>조직도입니다</h1>
      </>
   );
}
