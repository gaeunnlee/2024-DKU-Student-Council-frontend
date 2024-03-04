import { IFormInfo } from 'api/upload/types/upload';
import React, { useEffect } from 'react';

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
   const [imageList, setImageList] = React.useState([{ imageUrl: '', imageName: '' }]);

   useEffect(() => {
      setImageList([]);
   }, []);

   const addImage = ({ e, formInfo, setFormInfo }: ImageProps['add']) => {
      const imageList: FileList | null = e.target.files;
      const fileList = formInfo.files;

      Array.from(imageList!).forEach((item) => {
         const imageUrl = URL.createObjectURL(item);
         setFormInfo((prevFormInfo) => ({
            ...prevFormInfo,
            files: [...fileList, item],
         }));
         setImageList((prev) => [...prev, { imageUrl: imageUrl, imageName: item.name }]);
      });
   };

   const deleteImage = ({ id, setFormInfo }: ImageProps['delete']) => {
      setImageList((prev) => prev.filter((_, index) => index !== id));
      setFormInfo((prev) => ({
         ...prev,
         files: prev.files.filter((_, index) => index !== id),
      }));
   };

   return {
      imageList,
      addImage,
      deleteImage,
   };
};

export default useImageUpload;
