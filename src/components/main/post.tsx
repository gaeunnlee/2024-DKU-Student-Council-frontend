import React from 'react';
import Input from 'components/ui/input';
import Button from 'components/ui/button';
import TextEditor from 'components/common/editor/index';
import { ImageProps } from 'hooks/useImageUpload';
import { IFormInfo } from 'hooks/useFormUpload';

interface PostProps {
   formInfo: IFormInfo;
   setFormInfo: React.Dispatch<React.SetStateAction<IFormInfo>>;
   handleUpdate: (value: string) => void;
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
   imageUrls: string[];
   addImage: (params: ImageProps['add']) => void;
   deleteImage: (params: ImageProps['delete']) => void;
}

function Post({
   formInfo,
   setFormInfo,
   handleUpdate,
   handleSubmit,
   imageUrls,
   addImage,
   deleteImage,
}: PostProps) {
   return (
      <form onSubmit={handleSubmit} encType='multipart/form-data' className='flex-col'>
         <Input
            label='제목'
            type='text'
            id='title'
            name='title'
            value={formInfo.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setFormInfo((prev) => {
                  return { ...prev, title: e.target.value };
               });
            }}
         />
         <TextEditor value={!formInfo.body ? '<br>' : `<p>${formInfo.body}</p>`} onChange={handleUpdate} />
         <label htmlFor='input-file'>
            사진추가
            <Input
               type='file'
               id='input-file'
               multiple
               onChange={(e) => addImage({ e, formInfo, setFormInfo })}
            />
         </label>
         {imageUrls.map((imageUrl, id) => (
            <div key={id}>
               <Button onClick={() => deleteImage({ id, setFormInfo })} className='w-2 h-4'>
                  x
               </Button>
               <img src={imageUrl} alt={`Image-${id}`} className='w-10 h-10' />
            </div>
         ))}
         <Button type='submit'>업로드</Button>
      </form>
   );
}

export default Post;
