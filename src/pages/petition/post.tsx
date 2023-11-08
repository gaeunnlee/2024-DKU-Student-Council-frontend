import React from 'react';
import Input from 'components/ui/input';
import Button from 'components/ui/button';
import { useApi } from 'hooks/useApi';
import { API_PATH } from 'constant';
import TextEditor from 'components/common/editor/index';
import useImageUpload from 'hooks/useImageUpload';

export interface IFormInfo {
  title: string;
  body: string;
  files: File[];
}

export default function PetitionForm() {
   const initFormInfo: IFormInfo = {
      title: '',
      body: '',
      files: [],
   };
   const [formInfo, setFormInfo] = React.useState<IFormInfo>(initFormInfo);

   const handleUpdate = (value: string) => {
      const cleanedValue = value.replaceAll(/<\/?p[^>]*>/g, '').replace(/<br>/g, '');
      setFormInfo({
         ...formInfo,
         body: cleanedValue,
      });
   };

   const { imageUrls, addImage, deleteImage } = useImageUpload();
   const { post } = useApi();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', formInfo.title);
      formData.append('body', formInfo.body);
      for (const file of formInfo.files) {
         formData.append('files', file);
      }
      post<IFormInfo, number>(API_PATH.POST.PETITION, formInfo, {
         authenticate: true,
         contentType: 'multipart/form-data',
         log: true,
      });
   };

   return (
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex-col">
         <Input
            label="제목"
            type="text"
            id="title"
            name="title"
            value={formInfo.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setFormInfo((prev) => {
                  return { ... prev, title: e.target.value };
               });
            }}
         />
         <TextEditor
            value={!formInfo.body ? '<br>' : `<p>${formInfo.body}</p>`}
            onChange={handleUpdate}
         />
         <label htmlFor="input-file">
               사진추가
            <Input type="file" id="input-file" multiple onChange={(e) => addImage({ e, formInfo, setFormInfo })} />
         </label> 
         {imageUrls.map((imageUrl, id) => (
            <div key={id}>
               <Button onClick={() => deleteImage({ id, setFormInfo })} className="w-2 h-4" >x</Button>
               <img src={imageUrl} alt={`Image-${id}`} className="w-10 h-10"/>
            </div>
         ))}
         <Button type='submit'>업로드</Button>
      </form>
   );
}
