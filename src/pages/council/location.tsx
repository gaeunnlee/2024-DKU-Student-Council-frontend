import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import map from '../../assets/images/map.png';
import { HEADING_TEXT, HEADING_STYLE } from 'constants/heading';
import SinglePageLayout from 'layouts/SinglePageLayout';

export default function Location() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.LOCATION.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   return (
      <SinglePageLayout>
         <img className='w-[366px] h-[240px] mx-auto' src={map} />
         <ul className='flex flex-col gap-4'>
            <li>
               <h2 className='font-semibold'>위치</h2>
               <span>혜당관 406호 총학생회실</span>
            </li>
            <li>
               <h2 className='font-semibold'>주소</h2>
               <span>(16890) 경기도 용인시 수지구 죽전동 1491 단국대학교 혜당관 406호 총학생회실</span>
            </li>
            <li>
               <h2 className='font-semibold'>전화</h2>
               <span>{'031)'}8005-2680-1</span>
            </li>
            <li>
               <h2 className='font-semibold'>이메일</h2>
               <span>dkudamda@gmail.com</span>
            </li>
            <li>
               <h2 className='font-semibold'>인스타그램</h2>
               <span>@dku_damda</span>
            </li>
         </ul>
      </SinglePageLayout>
   );
}
