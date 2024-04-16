import Organization01 from '@assets/images/organization-01.jpg';
import Organization02 from '@assets/images/organization-02.jpg';
import { Gnb, GnbGoBack, GnbTitle } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import SinglePageLayout from '@components/layouts/SinglePageLayout';
import Box from '@components/ui/box/index';
import Selector from '@components/ui/selector';
import { COUNCIL_LIST, HEADING_TEXT } from '@constants/heading';
import React from 'react';


export default function Organization() {
   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
            <GnbTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnbTitle>
         </Gnb>
         <HeaderSection className="pt-[38px] pl-[29px] pb-[30px]">
            <GnhTitle>{HEADING_TEXT.COUNCIL.HEAD}</GnhTitle>
            <Selector list={COUNCIL_LIST} subHeadingText={HEADING_TEXT.ORGANIZATION.SUBHEAD} />
         </HeaderSection>
         <ContentSection showNav={true} className="mb-20">
            <SinglePageLayout>
               <Box type='shadow' className='flex flex-col gap-5'>
                  <img className='rounded-md' src={Organization01} />
                  <img className='rounded-md' src={Organization02} />
               </Box>
            </SinglePageLayout>
         </ContentSection>
      </React.Fragment>
   );
}
