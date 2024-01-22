import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';

export default function Organization() {
   const { setLayout } = useLayout();

   const headingStyle = 'mt-[38px] mb-[5px] ml-[29px]';
   const subHeadingStyle = 'ml-[29px] mb-[30px] font-semibold';

   useEffectOnce(() => {
      setLayout({
         title: '총학생회',
         backButton: true,
         isMain: false,
         fullscreen: false,
         heading: '총학생회',
         subHeading: '조직도',
         headingStyle: headingStyle,
         subHeadingStyle: subHeadingStyle,
         margin: '',
         rounded: true,
      });
   });

   return (
      <>
         <h1>조직도입니다</h1>
      </>
   );
}
