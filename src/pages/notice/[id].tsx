import Carousel from '@components/common/carousel';
import PostDetailLayout from '@components/layouts/PostDetailLayout';
import PostBox, { FileBox } from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useGetNoticeItem } from '@hooks/api/notice/useGetNoticeItem';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function NoticeDetail() {
   const { setLayout } = useLayout();
   const params = useParams();
   const id = params.id;
   const noticeId = id?.toString();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.NOTICE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const { data: notice } = useGetNoticeItem(noticeId as string);

   return (
      <PostDetailLayout>
         <PostBox>
            <Collapse status={true}>
               <Carousel data={notice?.images} />
            </Collapse>
            <p>{notice.title}</p>
            <p>{notice.body}</p>
         </PostBox>
         {notice.files.length && <FileBox files={notice.files} />}
      </PostDetailLayout>
   );
}
