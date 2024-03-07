import Carousel from 'components/common/carousel';
import PostBox, { FileBox } from 'components/ui/box/PostBox';
import { API_PATH } from 'constants/api';
import React from 'react';
import Collapse from 'components/ui/collapse';
import { useFetchPost } from 'hooks/useFetchPost';
import PostDetailLayout from 'layouts/PostDetailLayout';
import { HEADING_TEXT, HEADING_STYLE } from 'constants/heading';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { IPost } from 'interfaces/post';

export default function BusinessDetail() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.BUSINESS.HEAD,
         subHeadingText: HEADING_TEXT.BUSINESS.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
      });
   });

   const { post, images } = useFetchPost<IPost>({ api: API_PATH.POST.NOTICE.ROOT, isCarousel: true });
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
