import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import map from '../../assets/images/map.png';

export default function Location() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: '총학생회',
         backButton: true,
         isMain: false,
         fullscreen: false,
         heading: '총학생회',
         subHeading: '오시는 길',
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
         margin: '',
         rounded: true,
      });
   });

   return (
      <>
         <img className='w-[366px] h-[240px] mx-auto' src={map} />
         <ul>
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
      </>
   );
}
