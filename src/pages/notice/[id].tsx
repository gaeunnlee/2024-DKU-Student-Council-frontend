import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { HeaderSection, ContentSection } from '@components/layouts';
import PostDetailLayout from '@components/layouts/PostDetailLayout';
import NoticeItem from '@components/notice/[id]';
import Selector from '@components/ui/selector';
import NoticeSkeleton from '@components/ui/skeleton/main';
import { HEADING_TEXT, COUNCIL_LIST } from '@constants/heading';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';



export default function NoticeDetail() {
   const params = useParams();   
   const id = params.id as string;
   const noticeId = id.toString();
   
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] pl-[29px] pb-[30px]">
            <GnhTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnhTitle>
            <Selector list={COUNCIL_LIST} subHeadingText={HEADING_TEXT.NOTICE.SUBHEAD} />
         </HeaderSection>
         <ContentSection>
            <PostDetailLayout>
               <Suspense fallback={<NoticeSkeleton />}>
                  <NoticeItem noticeId={noticeId} />
               </Suspense>
            </PostDetailLayout>
         </ContentSection>
      </React.Fragment>
   );
}
