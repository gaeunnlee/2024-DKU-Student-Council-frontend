import { useEffect, useState } from 'react';
import { useParam } from './useParam';
import { useAlert } from './useAlert';

type TPost = {
   images: [
      {
         id: number;
         url: string;
         thumbnailUrl: string;
         originalName: string;
         mimeType: string;
      },
   ];
};

export const useFetchPost = <T extends TPost>({
   api,
   update,
   isCarousel,
}: {
   api: string;
   update?: boolean;
   isCarousel?: boolean;
}) => {
   const { postId, get } = useParam();
   const [post, setPost] = useState<T>();
   const [images, setImages] = useState<string[]>([]);
   const { alert } = useAlert();

   const fetchPost = async () => {
      try {
         const data = await get<T>(`${api}/${postId}`, {
            authenticate: true,
            contentType: 'application/json',
            log: true,
         });
         setPost(data);
      } catch (error) {
         alert;
      }
   };

   useEffect(() => {
      fetchPost();
   }, []);

   useEffect(() => {
      if (update) {
         fetchPost();
      }
   }, [update]);

   useEffect(() => {
      if (post !== undefined && post!.images.length > 0) {
         post.images.forEach((image) => {
            setImages((prev) => [...prev, image.url]);
         });
      }
   }, [post]);

   if (isCarousel)
      return {
         post,
         images,
      };

   return { post, postId };
};
