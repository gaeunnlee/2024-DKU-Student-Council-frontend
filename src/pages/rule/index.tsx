import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import Selector from '@components/ui/selector';
import ConferenceSkeleton from '@components/ui/skeleton/conference';
import { HEADING_TEXT, COUNCIL_LIST } from '@constants/heading';
import React, { Suspense, lazy } from 'react';


const RuleList = lazy(() => import('@components/rule/index'));


export default function RuleBoard() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] ml-[29px] pb-[30px]">
            <GnhTitle className="mb-2">{HEADING_TEXT.COUNCIL.HEAD}</GnhTitle>
            <Selector list={COUNCIL_LIST} subHeadingText={HEADING_TEXT.RULE.SUBHEAD} />
         </HeaderSection>
         <ContentSection showNav={true}>
            <Suspense fallback={<ConferenceSkeleton />}>
               <RuleList />
            </Suspense>
         </ContentSection>
      </React.Fragment>
   );
}
