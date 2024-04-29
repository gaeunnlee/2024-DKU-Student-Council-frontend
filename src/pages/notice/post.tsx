import { Gnb, GnbGoBack } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { HeaderSection, ContentSection } from '@components/layouts';
import Post from '@components/main/post';
import { usePostNoticeForm } from '@hooks/api/notice/usePostNoticeForm';
import { PostFormInfo } from '@hooks/api/notice/usePostNoticeForm';
import { useFormUpload } from '@hooks/useFormUpload';
import useImageUpload from '@hooks/useImageUpload';
import React from 'react';


export default function NoticePost() {
   const initFormInfo: PostFormInfo = {
      title: '',
      body: '',
      files: [],
   };

   const { formInfo, setFormInfo, handleUpdate } = useFormUpload(initFormInfo);
   const { mutate } = usePostNoticeForm();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', formInfo.title);
      formData.append('body', formInfo.body);
      if (formInfo.files !== undefined) {
         for (const file of formInfo.files) {
            formData.append('files', file);
         }
      }
      mutate(formInfo);
   };

   const { imageList, addImage, deleteImage } = useImageUpload();

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <HeaderSection className="pt-[45px] pb-14 pl-8">
            <GnhTitle>공지</GnhTitle>
         </HeaderSection>
         <ContentSection>
            <Post
               postType='공지'
               formInfo={formInfo}
               setFormInfo={setFormInfo}
               handleUpdate={handleUpdate}
               handleSubmit={handleSubmit}
               imageList={imageList}
               addImage={addImage}
               deleteImage={deleteImage}
            />
         </ContentSection>
      </React.Fragment>
   );
}
