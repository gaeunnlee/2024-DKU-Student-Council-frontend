import Title, { Date } from 'components/ui/text/board';
import { API_PATH, CONSTANTS } from 'constants/api';
import { HeadingStyle } from 'constants/heading';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function ConferenceBoard() {
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: '총학생회',
         backButton: true,
         isMain: false,
         fullscreen: false,
         heading: '총학생회',
         subHeading: '회의록',
         headingStyle: HeadingStyle.default.header,
         headingText: HeadingStyle.default.heading,
         subHeadingText: HeadingStyle.default.subHeading,
         margin: '',
         rounded: true,
      });
   });

   const Cell = ({ data }: { data: IBoardList }) => (
      <div className='flex gap-2 p-3'>
         <Title content={data.title} className='grow text-center truncate' />
         <Date content={data.createdAt} className='font-semibold' />
      </div>
   );
   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.CONFERENCE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
         isFileLink={true}
      />
   );
}
