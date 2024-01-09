import React from 'react';
import { API_PATH } from 'constant';
import useImageUpload from 'hooks/useImageUpload';
import { IFormInfo } from 'hooks/useFormUpload';
import { useFormUpload } from 'hooks/useFormUpload';
import Post from 'components/main/post';

export default function PetitionForm() {
   const initFormInfo: IFormInfo = {
      title: '',
      body: '',
      files: [],
   };

   const { formInfo, setFormInfo, handleUpdate, handleSubmit } = useFormUpload(
      initFormInfo,
      API_PATH.POST.PETITION.ROOT,
   );

   const { imageUrls, addImage, deleteImage } = useImageUpload();

   return (
      <Post
         pageTitle='청원'
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
