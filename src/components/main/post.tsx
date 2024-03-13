import { IFormInfo } from '@api/upload/types/upload';
import TextEditor from '@components/common/editor/index';
import PostBox from '@components/ui/box/PostBox';
import FloatingButton from '@components/ui/button/FloatingButton';
import Title from '@components/ui/text/board';
import { ImageProps } from '@hooks/useImageUpload';
import React, { ReactNode } from 'react';
import { FaCamera } from 'react-icons/fa';

interface PostProps {
   formInfo: IFormInfo;
   setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>;
   handleUpdate: (value: string) => void;
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   imageList: { imageUrl: string; imageName: string }[];
   addImage: (params: ImageProps['add']) => void;
   deleteImage: (params: ImageProps['delete']) => void;
   pageTitle: string;
   navigateUrl: string;
}

export default function Post({
   formInfo,
   setFormInfo,
   handleUpdate,
   handleSubmit,
   imageList,
   addImage,
   deleteImage,
   pageTitle,
}: PostProps) {
   return (
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='flex-col'>
         <Box>
            <Title content={`${pageTitle} 제목`} />
            <input
               type='text'
               id='title'
               name='title'
               value={formInfo.title}
               placeholder='제목을 입력해주세요'
               className='w-full focus:outline-0'
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormInfo((prev) => {
                     return { ...prev, title: e.target.value };
                  });
               }}
            />
         </Box>
         <Box>
            <Title content={`${pageTitle} 내용`} />
            <TextEditor value={!formInfo.body ? '<br>' : `<p>${formInfo.body}</p>`} onChange={handleUpdate} />
         </Box>
         <Box>
            <label htmlFor='input-file' className='flex items-center gap-3'>
               <input
                  type='file'
                  id='input-file'
                  multiple
                  onChange={(e) => addImage({ e, formInfo, setFormInfo })}
                  className='hidden'
                  accept='image/png, image/jpeg'
               />
               <FaCamera />
               <span>이미지를 업로드하세요.</span>
            </label>
            {imageList.map((image, id) => (
               <div key={id} className='flex gap-3'>
                  <img src={image.imageUrl} alt={`Image-${id}`} className='w-10 h-10' />
                  <span className='truncate'>{image.imageName}</span>
                  <button
                     type='button'
                     onClick={() => {
                        console.log(id);
                        deleteImage({ id, setFormInfo });
                     }}
                  >
                     x
                  </button>
               </div>
            ))}
         </Box>
         <FloatingButton event={() => {}}>
            <p className='text-white'>Upload</p>
         </FloatingButton>
      </form>
   );
}

function Box({ children }: { children: ReactNode }) {
   return <PostBox className='flex flex-col gap-3 px-6'>{children}</PostBox>;
}
