import BoardLayout, { IBoardList } from '@components/layouts/BoardLayout';
import { Date } from '@components/ui/text/board';
import { API_PATH } from '@constants/api';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useLayout } from '@hooks/useLayout';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function BusinessBoard() {
   const { setLayout } = useLayout();
   const { pathname } = useLocation();
   const [category, setCategory] = useState('');

   useEffect(() => {
      const categoryName = pathname.split('/business/')[1].toUpperCase();
      setCategory(categoryName);
   }, [pathname]);

   useEffect(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.BUSINESS.HEAD,
         subHeadingText:
            Object.getOwnPropertyDescriptor(HEADING_TEXT.BUSINESS.SUBHEAD, category)?.value ?? '',
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.BUSINESS.DROPDOWN,
      });
   }, [category]);

   const Cell = ({ data }: { data: IBoardList }) => (
      <div className='flex gap-4 overflow-hidden '>
         <div
            className='w-[40%] h-[100px] overflow-hidden'
            style={{ background: 'linear-gradient(131.53deg, #01060B 0%, #084287 100%)' }}
         >
            <img
               className='w-full'
               src={data.images !== undefined && data.images.length > 0 ? data.images[0].url : ''}
            />
         </div>
         <div className='w-[60%] h-[100px] flex flex-col gap-3 justify-center'>
            <p className=' font-bold text-base line-clamp-2'>{data.title}</p>
            <Date content={data.createdAt} className='text-gray-400 text-xs' />
         </div>
      </div>
   );

   return (
      <BoardLayout
         api={category.length > 0 ? API_PATH.COALITION.ROOT + '?coalitionType=' + category : ''}
         setCell={(data: IBoardList) => <Cell data={data} />}
      />
   );
}
