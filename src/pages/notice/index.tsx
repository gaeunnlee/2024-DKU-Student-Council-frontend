import Title, { Date } from 'components/ui/text/board';
import { API_PATH, CONSTANTS } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import { HEADING_TEXT, HEADING_STYLE } from 'constants/heading';
import React from 'react';

export default function NoticeBoard() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.NOTICE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

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
            <Title content={data.title} className=' font-bold text-base line-clamp-2' />
            <Date content={data.createdAt} className='text-gray-400 text-xs' />
         </div>
      </div>
   );

   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.NOTICE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
      />
   );
}
