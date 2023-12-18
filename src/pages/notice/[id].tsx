import Box from 'components/ui/box';
import { API_PATH } from 'constant';
import { useParam } from 'hooks/useParam';
import React, { useEffect, useState } from 'react';

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
      } catch (error) {
         alert(error);
      }
   };
   useEffect(() => {
      fetchPost();
   }, []);
   return (
      <Box>
         <p>{post?.title}</p>
         <p>{post?.createdAt}</p>
         <p>{post?.body}</p>
         <div>{post?.files.map((file) => <img key={file.id} src={file.thumbnailUrl} />)}</div>
      </Box>
   );
}
