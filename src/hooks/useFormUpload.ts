import { IFormInfo } from '@api/upload/types/upload';
import { usePostFormUpload } from '@hooks/query/upload/mutation';
import React from 'react';

import { useAlert } from './useAlert';

export const useFormUpload = ({
   initFormInfo,
   API_PATH,
   NAVIGATE_PATH,
}: {
   initFormInfo: IFormInfo;
   API_PATH: string;
   NAVIGATE_PATH: string;
}) => {
   const [formInfo, setFormInfo] = React.useState<IFormInfo>(initFormInfo);
   const { mutate } = usePostFormUpload(NAVIGATE_PATH);
   const { alert } = useAlert();

   const handleUpdate = (value: string) => {
      const cleanedValue = value.replaceAll(/<\/?p[^>]*>/g, '').replace(/<br>/g, '');
      setFormInfo({
         ...formInfo,
         body: cleanedValue,
      });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', formInfo.title);
      formData.append('body', formInfo.body);
      if (formInfo.files !== undefined) {
         for (const file of formInfo.files) {
            formData.append('files', file);
         }
      }
      if (formInfo.title.length > 0 && formInfo.body.length > 0) {
         mutate({ formInfo, API_PATH });
      } else {
         alert('제목과 내용을 입력해주세요');
      }
   };

   return {
      formInfo,
      setFormInfo,
      handleUpdate,
      handleSubmit,
   };
};
