import SinglePageLayout from '@components/layouts/SinglePageLayout';
import Box from '@components/ui/box';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function Greeting() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.GREETING.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   return (
      <SinglePageLayout>
         <Box className='overflow-hidden' type='shadowImage'>
            <img className='w-full h-[calc(100vw*0.2)] border-none bg-neutral-300' src={''} />
         </Box>
         <Box className='text-sm leading-5 flex flex-col gap-5' type='shadow'>
            <header>
               <h1>그대의 청춘에 단국을 담다,</h1>
            </header>
            <section className='flex flex-col gap-5'>
               <p>
                  안녕하십니까 단국대학교 죽전 캠퍼스 학우 여러분, <br />
                  <strong>55대 담다 총학생회</strong>입니다. <br />
               </p>
               <p>
                  2023년, 우리 단국은 코로나19로부터 벗어나 제약 없는 대면 학교생활을 맞이하게 됩니다. <br />
                  저희 담다 총학생회는 학우 여러분의 청춘의 한 페이지에 단국을 담을 수 있도록,
               </p>
               <p>학우 여러분의 다양한 목소리를 담아 더 나은 학교를 만들기 위해 노력하겠습니다.</p>
               <span>감사합니다.</span>
            </section>
         </Box>
      </SinglePageLayout>
   );
}
