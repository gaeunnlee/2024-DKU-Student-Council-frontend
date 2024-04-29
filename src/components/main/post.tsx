import { Gnb, GnbGoBack } from '@components/common/gnb';
import { GnhSubtitle, GnhTitle } from '@components/common/gnh';
import { ContentSection, HeaderSection } from '@components/layouts';
import PostBox from '@components/ui/box/PostBox';
import FloatingButton from '@components/ui/button/FloatingButton';
import { Textarea } from '@components/ui/textarea';
import { HEADING_TEXT } from '@constants/heading';
import { ImageProps } from '@hooks/useImageUpload';
import React, { ReactNode } from 'react';
import { FaCamera } from 'react-icons/fa';


export interface PostFormInfo {
   title: string;
   body: string;
   files: File[];
}

interface PostProps {
   formInfo: PostFormInfo;
   setFormInfo: React.Dispatch<React.SetStateAction<PostFormInfo>>;
   handleUpdate: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   imageList: { imageUrl: string; imageName: string }[];
   addImage: (params: ImageProps['add']) => void;
   deleteImage: (params: ImageProps['delete']) => void;
   postType: '청원' | '공지';
}

export default function Post({
   formInfo,
   setFormInfo,
   handleUpdate,
   handleSubmit,
   imageList,
   addImage,
   deleteImage,
   postType,
}: PostProps) {

   //TODO) 이미지 리스트 컴포넌트로 분리
   //TODO) Input 도 onChange를 useUploadForm 에 작성

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <HeaderSection>
            <GnhTitle>{HEADING_TEXT.PETITION.HEAD}</GnhTitle>
            <GnhSubtitle>{HEADING_TEXT.COUNCIL.HEAD}</GnhSubtitle>
         </HeaderSection>
         <ContentSection>
            <form onSubmit={handleSubmit} encType='multipart/form-data' className='flex-col gap-4'>
               <Box>
                  <p>{`${postType} 제목`}</p>
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
                  <p>{`${postType} 내용`}</p>
                  <Textarea
                     className="h-14"
                     value={formInfo.body && formInfo.body}
                     placeholder={`${postType} 내용을 입력해 주세요.`}
                     onChange={handleUpdate}
                  />
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
         </ContentSection>
      </React.Fragment>
   );
}

function Box({ children }: { children: ReactNode }) {
   return <PostBox className='flex flex-col gap-3 px-6'>{children}</PostBox>;
}
