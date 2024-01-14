import React, { useEffect } from 'react';
import { useApi } from './useApi';

export interface IFormInfo {
   title: string;
   body: string;
   files: File[];
}

export const useFormUpload = (initFormInfo: IFormInfo, apiPath: string) => {
   const [formInfo, setFormInfo] = React.useState<IFormInfo>(initFormInfo);

   const handleUpdate = (value: string) => {
      const cleanedValue = value.replaceAll(/<\/?p[^>]*>/g, '').replace(/<br>/g, '');
      setFormInfo({
         ...formInfo,
         body: cleanedValue,
      });
   };
   const { post } = useApi();

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
      post<IFormInfo, number>(apiPath, formInfo, {
         authenticate: true,
         contentType: 'multipart/form-data',
         log: true,
      });
   };

   useEffect(() => {
      console.log(initFormInfo);
   }, [initFormInfo]);

   return {
      formInfo,
      setFormInfo,
      handleUpdate,
      handleSubmit,
   };
};
