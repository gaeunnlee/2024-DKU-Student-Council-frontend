import Carousel from '@components/common/carousel';
import FileBox from '@components/ui/box/FileBox';
import PostBox from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import { useGetNoticeItem } from '@hooks/api/notice/useGetNoticeItem';
import React from 'react';


export default function NoticeItem({noticeId}: {noticeId: string}) {
   const { data: notice } = useGetNoticeItem(noticeId as string);
   return (
      <React.Fragment>
         <PostBox>
            <Collapse status={true}>
               {notice?.images.length > 0 && (<Carousel data={notice?.images} />)}
            </Collapse>
            <p>{notice.title}</p>
            <p>{notice.body}</p>
         </PostBox>
         {notice.files.length && <FileBox files={notice.files} />}
      </React.Fragment>
   );
}