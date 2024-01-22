import React from 'react';
import { API_PATH } from 'constants/api';
import { ROUTES } from 'constants/route';
import useImageUpload from 'hooks/useImageUpload';
import { IFormInfo } from 'hooks/useFormUpload';
import { useFormUpload } from 'hooks/useFormUpload';
import Post from 'components/main/post';

export default function NoticePost() {
   const initFormInfo: IFormInfo = {
      title: '',
      body: '',
      files: [],
   };

   const { formInfo, setFormInfo, handleUpdate, handleSubmit } = useFormUpload(
      initFormInfo,
      API_PATH.POST.NOTICE.ROOT,
   );

   const { imageList, addImage, deleteImage } = useImageUpload();

   return (
      <Post
         pageTitle='공지'
         navigateUrl={ROUTES.NOTICE.POST}
         formInfo={formInfo}
         setFormInfo={setFormInfo}
         handleUpdate={handleUpdate}
         handleSubmit={handleSubmit}
         imageList={imageList}
         addImage={addImage}
         deleteImage={deleteImage}
      />
   );
}
