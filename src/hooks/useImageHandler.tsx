import React, { ChangeEvent } from 'react';
import { IFormInfo } from 'pages/petition/post';

const useImageHandler = () => {
   const [imageUrls, setImageUrls] = React.useState<string[]>([]);

   const addImage = (e: ChangeEvent<HTMLInputElement>, formInfo: IFormInfo, setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>) => {
      const imageList: FileList | null = e.target.files;
      if (imageList) {
         const fileList = [...formInfo.files];
         const urlList = [...imageUrls];
         for (let i = 0; i < imageList.length; i++) {
            fileList.push(imageList[i]);
            const imageUrl = URL.createObjectURL(imageList[i]);
            urlList.push(imageUrl);
         }
         setFormInfo({
            ...formInfo,
            files: fileList,
         });
         setImageUrls(urlList);
      }
   };

   const deleteImage = (id: number, imageUrls: string[], formInfo: IFormInfo, setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>) => {
      URL.revokeObjectURL(imageUrls[id]);
      const updatedImageUrls = [...imageUrls];
      updatedImageUrls.splice(id, 1);
      setImageUrls(updatedImageUrls);
      const fileList = [...formInfo.files];
      fileList.splice(id, 1);
      setFormInfo({
         ...formInfo,
         files: fileList,
      });
   };

   return {
      imageUrls,
      addImage,
      deleteImage,
   };
};

export default useImageHandler;
