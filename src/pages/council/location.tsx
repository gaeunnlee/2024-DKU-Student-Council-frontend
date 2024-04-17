import map from '@assets/images/map.png';
import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import SinglePageLayout from '@components/layouts/SinglePageLayout';
import Selector from '@components/ui/selector';
import { HEADING_TEXT, COUNCIL_LIST } from '@constants/heading';
import React from 'react';


export default function Location() {
   const LOCATION_INFO = [
      {
         KEY: '위치',
         VALUE: '해당관 406호 총학생회실'
      },
      {
         KEY: '주소',
         VALUE: '(16890) 경기도 용인시 수지구 죽전동 1491 단국대학교 혜당관 406호 총학생회실',
      },
      {
         KEY: '전화',
         VALUE: '031)8005-2680-1',
      },
      {
         KEY: '이메일',
         VALUE: 'dkudamda@gmail.com',
      },
      {
         KEY: '인스타그램',
         VALUE: '@dku_damda',
      },
   ];

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] ml-[29px] pb-[30px]">
            <GnhTitle className="mb-2">{HEADING_TEXT.COUNCIL.HEAD}</GnhTitle>
            <Selector list={COUNCIL_LIST} subHeadingText={HEADING_TEXT.LOCATION.SUBHEAD} />
         </HeaderSection>
         <ContentSection showNav={true}>
            <SinglePageLayout>
               <img className='w-[366px] h-[240px] mx-auto' src={map} alt='단국대학교 총학생회 지도' />
               <ul className='flex flex-col gap-4'>
                  {LOCATION_INFO.map((info, index) => (
                     <li key={index}>
                        <h2 className="font-semibold">{info.KEY}</h2>
                        <span>{info.VALUE}</span>
                     </li>
                  ))}
               </ul>
            </SinglePageLayout>
         </ContentSection>
      </React.Fragment>
   );
}
