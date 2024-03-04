import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import SinglePageLayout from 'layouts/SinglePageLayout';
import Box from 'components/ui/box';
import Organization01 from '../../assets/images/organization-01.jpg';
import Organization02 from '../../assets/images/organization-02.jpg';

export default function Organization() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: '총학생회',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: '총학생회',
         subHeadingText: '조직도',
         headingStyle: '',
         subHeadingStyle: '',
         rounded: true,
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
