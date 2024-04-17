// import Carousel from '@components/common/carousel';
import { HeaderSection, ContentSection } from '@components/layouts';
import { AppDownload } from '@components/main/';
import CafeteriaSkeleton from '@components/ui/skeleton/cafeteria';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT } from '@constants/heading';
import useGetMain from '@hooks/api/main/useGetMain';
import React, { Suspense, lazy } from 'react';

import { Gnb, GnbLogo } from '@/components/common/gnb';
import { GnhSubtitle, GnhTitle } from '@/components/common/gnh';
import Nav from '@/components/common/nav';

const Carousel = lazy(() => import('@components/common/carousel'));
const Notice = lazy(() => import('@components/main/notice'));
const Petition = lazy(() => import('@components/main/petition'));
const Cafeteria = lazy(() => import('@components/main/cafeteria'));


export default function Main() {
   const { data: main } = useGetMain();
   
   //TODO) Cafeteria skeleton 추가
   return (
      <React.Fragment>
         {/* <MainSkeleton /> */}
         <Gnb>
            <GnbLogo />
         </Gnb>
         <HeaderSection className="text-center h-[155px] pt-[41px] pb-[65px]">
            <GnhTitle className='mb-[3pb]'>{HEADING_TEXT.MAIN.HEAD}</GnhTitle>
            <GnhSubtitle className='text-[11px]'>{HEADING_TEXT.MAIN.SUBHEAD}</GnhSubtitle>
         </HeaderSection>
         <ContentSection className="!rounded-t-none mb-[60px]">
            <div className='w-full h-[337px] flex justify-center bg-white relative'>
               <Suspense fallback={<Spinner />}>
                  <Carousel
                     data={main?.carousels ?? []}
                     className='w-[322px] h-[322px] absolute -top-12 mx-auto'
                  />
               </Suspense>
            </div>
            <div className='bg-gray-100 pt-5 pb-4'>
               <Notice notices={main?.recentNotices} />
               <Petition petitions={main?.popularPetitions} />
               <Suspense fallback={<CafeteriaSkeleton />}>
                  <Cafeteria />
               </Suspense>
               <AppDownload />
            </div>
         </ContentSection>
         <Nav />
      </React.Fragment>
   );
}
