import Carousel from '@components/common/carousel';
import PostDetailLayout from '@components/layouts/PostDetailLayout';
import PostBox, { FileBox } from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useLayout } from '@hooks/useLayout';
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function BusinessDetail() {
   const { setLayout } = useLayout();
   const params = useParams();
   const category = params.category;
   const location = useLocation();
   const coalition = location.state;
   useEffect(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.BUSINESS.HEAD,
         subHeadingText:
            Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, category as string)?.value ?? '',
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.BUSINESS.DROPDOWN,
      });
   }, [category]);

   return (
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
   );
}
