import React from 'react';
import { useApi } from './useApi';
import { useNavigate } from 'react-router-dom';

export interface IFormInfo {
   title: string;
   body: string;
   files: File[];
}

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
   const navigate = useNavigate();

   const handleUpdate = (value: string) => {
      const cleanedValue = value.replaceAll(/<\/?p[^>]*>/g, '').replace(/<br>/g, '');
      setFormInfo({
         ...formInfo,
         body: cleanedValue,
      });
   };
   const { post } = useApi();

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
      try {
         const data = await post<IFormInfo, number>(API_PATH, formInfo, {
            authenticate: true,
            contentType: 'multipart/form-data',
            log: true,
         });
         navigate(NAVIGATE_PATH);
         return data;
      } catch (e) {
         console.log(e);
      }
   };

   return {
      formInfo,
      setFormInfo,
      handleUpdate,
      handleSubmit,
   };
};
