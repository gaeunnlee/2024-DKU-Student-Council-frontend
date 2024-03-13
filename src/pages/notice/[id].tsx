import Carousel from '@components/common/carousel';
import PostBox, { FileBox } from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import { API_PATH } from '@constants/api';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useFetchPost } from '@hooks/useFetchPost';
import { useLayout } from '@hooks/useLayout';
import PostDetailLayout from '@layouts/PostDetailLayout';
import React from 'react';

export default function NoticeDetail() {
   const { setLayout } = useLayout();

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
      });
   });

   const { post, images } = useFetchPost<INotice>({ api: API_PATH.POST.NOTICE.ROOT, isCarousel: true });
   return (
      <PostDetailLayout>
         {images!.length > 0 && (
            <PostBox>
               <Collapse status={true}>
                  <Carousel data={images!} />
               </Collapse>
            </PostBox>
         )}
         <PostBox>
            <p className='text-slate-400'>{post?.createdAt}</p>
            <p>{post?.title}</p>
            <p>{post?.body}</p>
         </PostBox>
         {post !== undefined && post.files.length > 0 && <FileBox files={post?.files} />}
      </PostDetailLayout>
   );
}

interface INotice {
   id: number;
   title: string;
   body: string;
   author: string;
   tag: [{ id: number; name: string }];
   createdAt: string;
   images: [
      {
         id: number;
         url: string;
         thumbnailUrl: string;
         originalName: string;
         mimeType: string;
      },
   ];
   files: [
      {
         id: number;
         url: string;
         originalName: string;
         mimeType: string;
      },
   ];
   likes: number;
   views: number;
   liked: boolean;
   mine: boolean;
   blinded: boolean;
}
