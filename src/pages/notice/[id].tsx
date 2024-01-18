import Carousel from 'components/common/carousel';
import PostBox, { FileBox } from 'components/ui/box/PostBox';
import { API_PATH } from 'constant';
import React from 'react';
import Collapse from 'components/ui/collapse';
import { useFetchPost } from 'hooks/useFetchPost';

export default function NoticeDetail() {
   const { post, images } = useFetchPost<INotice>({ api: API_PATH.POST.NOTICE.ROOT, isCarousel: true });
   return (
      <>
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
      </>
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
