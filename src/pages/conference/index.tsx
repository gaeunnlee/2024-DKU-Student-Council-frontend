import BoardLayout, { IBoardList } from '@components/layouts/BoardLayout';
import { Date } from '@components/ui/text/board';
import { API_PATH } from '@constants/api';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function ConferenceBoard() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.CONFERENCE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const Cell = ({ data }: { data: IBoardList }) => (
      <div className='flex gap-2 p-3'>
         <p className='grow text-center truncate'>{data.title}</p>
         <Date content={data.createdAt} className='font-semibold' />
      </div>
   );
   return (
      <BoardLayout
         api={API_PATH.CONFERENCE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
         isFileLink={true}
      />
   );
}
