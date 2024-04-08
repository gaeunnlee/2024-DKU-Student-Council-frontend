import { PostFormInfo } from '@components/main/post';
import React from 'react';

export const useFormUpload = (initFormInfo: PostFormInfo) => {
   const [formInfo, setFormInfo] = React.useState<PostFormInfo>(initFormInfo);

   const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormInfo({
         ...formInfo,
         body: e.target.value,
      });
   };

   return {
      formInfo,
      setFormInfo,
      handleUpdate,
   };
};
