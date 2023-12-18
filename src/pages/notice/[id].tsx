import PostBox, { FileBox } from 'components/ui/box/PostBox';
import { API_PATH } from 'constant';
import { useParam } from 'hooks/useParam';
import React, { useEffect, useState } from 'react';
import { LuPaperclip } from 'react-icons/lu';
interface INotice {
   id: number;
   title: string;
   body: string;
   author: string;
   tag: [{ id: number; name: string }];
   createdAt: string;
   files: [
      {
         id: number;
         url: string;
         thumbnailUrl: string;
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

export default function NoticeDetail() {
   const { postId, get } = useParam();
   const [post, setPost] = useState<INotice>();

   const fetchPost = async () => {
      try {
         const data = await get<INotice>(API_PATH.POST.NOTICE.ID(postId));
         setPost(data);
         console.log(data);
      } catch (error) {
         alert(error);
      }
   };
   useEffect(() => {
      fetchPost();
   }, []);
   return (
      <>
         <PostBox>
            <p className='text-slate-400'>{post?.createdAt}</p>
            <p>{post?.title}</p>
            <p>{post?.body}</p>
            {post?.files.map((file) => {
               return file.mimeType.indexOf('image') >= 0 && <img key={file.id} src={file.thumbnailUrl} />;
            })}
         </PostBox>
         {post!.files.length > 0 && (
            <FileBox className='leading-2'>
               {post?.files.map((file) => (
                  <>
                     <a
                        className='flex items-center gap-2'
                        href={file.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={file.id}
                     >
                        <LuPaperclip />

                        {file.originalName}
                     </a>
                     <br />
                  </>
               ))}
            </FileBox>
         )}
      </>
   );
}
