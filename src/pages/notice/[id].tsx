import Box from 'components/ui/box';
import { API_PATH } from 'constant';
import { useApi } from 'hooks/useApi';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

interface INotice {
   id: number;
   title: string;
   body: string;
   author: string;
   tag: [];
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
   const { get } = useApi();
   const [post, setPost] = useState<INotice>();
   const location = useLocation();
   const postId = location.pathname.split('notice/')[1];
   const fetchPost = async () => {
      const data = await get<INotice>(API_PATH.POST.NOTICE.ID(postId));
      setPost(data);
   };
   useEffect(() => {
      fetchPost();
   }, []);
   return (
      <Box>
         <h2>{post?.title}</h2>
         <h2>{post?.createdAt}</h2>
         <h2>{post?.author}</h2>
         <h2>{post?.body}</h2>
         <h2>
            {post?.files.map((file) => {
               return <img key={file.id} src={file.thumbnailUrl} />;
            })}
         </h2>
      </Box>
   );
}
