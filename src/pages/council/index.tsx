import React from 'react';
import Box from 'components/ui/box';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { HeadingStyle } from 'constants/heading';

export default function Greeting() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: '총학생회',
         backButton: true,
         isMain: false,
         fullscreen: false,
         heading: '총학생회',
         subHeading: '인사말',
         headingStyle: HeadingStyle.default.header,
         headingText: HeadingStyle.default.heading,
         subHeadingText: HeadingStyle.default.subHeading,
         margin: '',
         rounded: true,
      });
   });

   return (
      <Box>
         <header>
            <h1>그대의 청춘에 단국을 담다,</h1>
         </header>
         <section>
            <p>
               안녕하십니까 단국대학교 죽전 캠퍼스 학우 여러분, <br />
               <strong>55대 담다 총학생회</strong>입니다. <br />
            </p>
            <p>
               2023년, 우리 단국은 코로나19로부터 벗어나 제약 없는 대면
               <br />
               학교생활을 맞이하게 됩니다. <br />
               저희 담다 총학생회는 학우 여러분의 청춘의 한 페이지에 <br />
               단국을 담을 수 있도록,
            </p>
            <p>학우 여러분의 다양한 목소리를 담아 더 나은 학교를 만들기 위해 노력하겠습니다.</p>
            <span>감사합니다.</span>
         </section>
      </Box>
   );
}
