import { Date } from '@components/ui/text/board';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ContentResponse } from '@/types/page';

export default function ItemList({ content }: { content: ContentResponse }) {
   const navigate = useNavigate();
   return (
      <div className='flex gap-4 overflow-hidden px-1' onClick={() => navigate(content.id)}>
         <div
            className='w-[40%] h-[100px] overflow-hidden'
            style={{ background: 'linear-gradient(131.53deg, #01060B 0%, #084287 100%)' }}
         >
            {content.images[0] && <img className='w-full' src={content.images[0] && content.images[0].url} />}
         </div>
         <div className='w-[60%] h-[100px] flex flex-col gap-3 justify-center'>
            <p className='font-bold text-base line-clamp-2'>{content.title}</p>
            <Date date={content.createdAt} className='text-gray-400 text-xs' />
         </div>
      </div>
   );
}
