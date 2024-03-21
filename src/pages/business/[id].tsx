import Carousel from '@components/common/carousel';
import PostBox, { FileBox } from '@components/ui/box/PostBox';
import Collapse from '@components/ui/collapse';
import { API_PATH } from '@constants/api';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useFetchPost } from '@hooks/useFetchPost';
import { useLayout } from '@hooks/useLayout';
import PostDetailLayout from '@layouts/PostDetailLayout';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { IPost } from '../../interfaces/post';

export default function BusinessDetail() {
   const { setLayout } = useLayout();
   const { pathname } = useLocation();
   const [category, setCategory] = useState('');

   useEffect(() => {
      const categoryName = pathname.split('/')[2].toUpperCase();
      setCategory(categoryName);
   }, [pathname]);

   useEffect(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.BUSINESS.HEAD,
         subHeadingText:
            Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, category)?.value ?? '',
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.BUSINESS.DROPDOWN,
      });
   }, [category]);

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
