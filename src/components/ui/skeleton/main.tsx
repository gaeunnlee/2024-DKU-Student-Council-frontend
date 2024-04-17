import { Gnb, GnbLogo } from '@components/common/gnb';
import { GnhTitle, GnhSubtitle } from '@components/common/gnh';
import { HeaderSection } from '@components/layouts';
import { Skeleton } from '@components/ui/skeleton/base';
import MainBoardSkeleton from '@components/ui/skeleton/mainBoard';
import { HEADING_TEXT } from '@constants/heading';
import React, { Fragment } from 'react';


export default function MainSkeleton() {
   return (
      <Fragment>
         <Gnb>
            <GnbLogo />
         </Gnb>
         <HeaderSection className="text-center h-[155px] pt-[41px] pb-[65px]">
            <GnhTitle className='mb-[3pb]'>{HEADING_TEXT.MAIN.HEAD}</GnhTitle>
            <GnhSubtitle className='text-[11px]'>{HEADING_TEXT.MAIN.SUBHEAD}</GnhSubtitle>
         </HeaderSection>
         <div className='w-full h-[337px] flex justify-center bg-white relative'>
            <Skeleton className="w-[322px] h-[322px]" />
         </div>
         <div className='bg-gray-100 pt-5 pb-4'>
            <MainBoardSkeleton />
         </div>
      </Fragment>
   );
}