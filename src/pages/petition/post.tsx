import Post from '@components/main/post';
import { PostFormInfo } from '@hooks/api/petition/usePostPetitionForm';
import { usePostPetitionForm } from '@hooks/api/petition/usePostPetitionForm';
import { useFormUpload } from '@hooks/useFormUpload';
import useImageUpload from '@hooks/useImageUpload';
import React from 'react';

export default function PetitionForm() {
   const initFormInfo: PostFormInfo = {
      title: '',
      body: '',
      files: [],
   };

   const { formInfo, setFormInfo, handleUpdate } = useFormUpload(initFormInfo);
   const { mutate } = usePostPetitionForm();
   const { imageList, addImage, deleteImage } = useImageUpload();

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

   return (
      <Post
         postType='청원'
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
