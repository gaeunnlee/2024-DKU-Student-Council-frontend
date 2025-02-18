import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { HeaderSection, ContentSection } from '@components/layouts';
import Selector from '@components/ui/selector';
import NoticeSkeleton from '@components/ui/skeleton/notice';
import { HEADING_TEXT, COUNCIL_LIST } from '@constants/heading';
import React, { Fragment, Suspense, lazy } from 'react';

const NoticeList = lazy(() => import('@components/notice/index'));

export default function NoticeBoard() {
   return (
      <Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] ml-[29px] pb-[30px]">
            <GnhTitle className='mb-2'>{HEADING_TEXT.COUNCIL.HEAD}</GnhTitle>
            <Selector list={COUNCIL_LIST} subHeadingText={HEADING_TEXT.NOTICE.SUBHEAD} />
         </HeaderSection>
         <ContentSection>
            <Suspense fallback={<NoticeSkeleton />}>
               <NoticeList />
            </Suspense>
         </ContentSection>
      </Fragment>
   );
}
