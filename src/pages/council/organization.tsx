import Organization01 from '@assets/images/organization-01.jpg';
import Organization02 from '@assets/images/organization-02.jpg';
import SinglePageLayout from '@components/layouts/SinglePageLayout';
import Box from '@components/ui/box/index';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function Organization() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.ORGANIZATION.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   return (
      <SinglePageLayout>
         <Box type='shadow' className='flex flex-col gap-5'>
            <img className='rounded-md' src={Organization01} />
            <img className='rounded-md' src={Organization02} />
         </Box>
      </SinglePageLayout>
   );
}
