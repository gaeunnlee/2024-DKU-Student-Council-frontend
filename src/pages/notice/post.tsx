import React from 'react';
import { API_PATH } from 'constant';
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
      API_PATH.POST.NOTICE,
   );

   const { imageUrls, addImage, deleteImage } = useImageUpload();

   return (
      <Post
         formInfo={formInfo}
         setFormInfo={setFormInfo}
         handleUpdate={handleUpdate}
         handleSubmit={handleSubmit}
         imageUrls={imageUrls}
         addImage={addImage}
         deleteImage={deleteImage}
      />
   );
}
