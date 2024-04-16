import Carousel from '@components/common/carousel';
import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import PostDetailLayout from '@components/layouts/PostDetailLayout';
import FileBox from '@components/ui/box/FileBox';
import PostBox from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import Selector from '@components/ui/selector';
import { BUSINESS_LIST, HEADING_TEXT } from '@constants/heading';
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { CoalitionType } from '@/types/coalition';


export default function BusinessDetail() {
   const params = useParams();
   const category = params.id?.toUpperCase();
   const location = useLocation();
   const coalition = location.state;

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] pl-[29px] pb-[30px]">
            <GnhTitle className="mb-2">{HEADING_TEXT.BUSINESS.HEAD}</GnhTitle>
            <Selector list={BUSINESS_LIST} subHeadingText={Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, category as CoalitionType)?.value} />
         </HeaderSection>
         <ContentSection>
            <PostDetailLayout>
               <PostBox>
                  <Collapse status={true}>
                     <Carousel data={coalition?.images} />
                  </Collapse>
                  <p className='text-slate-400'>{coalition?.createdAt}</p>
                  <p>{coalition?.title}</p>
                  <p>{coalition?.body}</p>
               </PostBox>
               {coalition.files.length > 0 && <FileBox files={coalition.files} />}
            </PostDetailLayout>
         </ContentSection>
      </React.Fragment>
   );
}
