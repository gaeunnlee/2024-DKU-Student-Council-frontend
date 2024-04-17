import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import Selector from '@components/ui/selector';
import NoticeSkeleton from '@components/ui/skeleton/notice';
import { HEADING_TEXT, BUSINESS_LIST } from '@constants/heading';
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

import { CoalitionType } from '@/types/coalition';

const BusinessList = lazy(() => import('@components/business/index'));


export default function BusinessBoard() {
   const { category } = useParams();
   const categoryType = category?.toUpperCase() as string;
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] pl-[29px] pb-[30px]">
            <GnhTitle className="mb-2">{HEADING_TEXT.BUSINESS.HEAD}</GnhTitle>
            <Selector list={BUSINESS_LIST} subHeadingText={Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, categoryType as CoalitionType)
               ?.value ?? ''} />
         </HeaderSection>
         <ContentSection showNav={true}>
            <Suspense fallback={<NoticeSkeleton />}>
               <BusinessList categoryType={categoryType} />
            </Suspense>
         </ContentSection>
      </React.Fragment>
   );
}
