import React from 'react';
import { IFormInfo } from 'pages/petition/post';

export interface ImageProps {
   add: {
      e: React.ChangeEvent<HTMLInputElement>;
      formInfo: IFormInfo;
      setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>;
   };
   delete: {
      id: number;
      setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>;
   };
}

const useImageUpload = () => {
   const [imageUrls, setImageUrls] = React.useState<string[]>([]);

   const addImage = ({ e, formInfo, setFormInfo }: ImageProps['add']) => {
      const imageList: FileList | null = e.target.files;
      if (imageList && imageList.length > 0) {
         const fileList = [...formInfo.files, imageList[0]];
         const imageUrl = URL.createObjectURL(imageList[0]);
         setFormInfo((prevFormInfo) => ({
            ...prevFormInfo,
            files: fileList,
         }));
         setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
      }
   };

   const deleteImage = ({ id, setFormInfo }: ImageProps['delete']) => {
      setImageUrls((prevImageUrls) => {
         URL.revokeObjectURL(prevImageUrls[id]);
         const updatedImageUrls = [...prevImageUrls];
         updatedImageUrls.splice(id, 1);
         return updatedImageUrls;
      });

      setFormInfo((prevFormInfo) => {
         const updatedFileList = [...prevFormInfo.files];
         updatedFileList.splice(id, 1);
         return {
            ...prevFormInfo,
            files: updatedFileList,
         };
      });
   };

   return {
      imageUrls,
      addImage,
      deleteImage,
   };
};

export default useImageUpload;
