import { PostFormInfo } from '@components/main/post';
import IconButton from '@components/ui/button/IconButton';
import { ImageProps } from '@hooks/useImageUpload';
import React from 'react';

interface ImagePreviewProps {
   imageList: { imageUrl: string; imageName: string }[];
   deleteImage: (params: ImageProps['delete']) => void;
   setFormInfo: React.Dispatch<React.SetStateAction<PostFormInfo>>;
}

export default function ImagePreview({ imageList, deleteImage, setFormInfo }: ImagePreviewProps) {
   return (
      <section className='flex gap-3 items-center'>
         {imageList.map((image, id) => (
            <div key={id} className='relative flex'>
               <img src={image.imageUrl} alt={`Image-${id}`} className='w-16 h-16 rounded-md' />
               <span className='truncate hidden'>{image.imageName}</span>
               <IconButton
                  id='delete'
                  width={16}
                  height={16}
                  onClick={() => {
                     deleteImage({ id, setFormInfo });
                  }}
                  buttonStyle='absolute bottom-14 left-14'
               />
            </div>
         ))}
      </section>
   );
}
