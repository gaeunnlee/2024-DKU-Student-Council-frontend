import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';

export default function ConferenceBoard() {
   const Cell = ({ data }: { data: IBoardList }) => (
      <a href={data.files[0].url} target='_blank' rel='noopener noreferrer' className='flex gap-2'>
         <Title>{data.title}</Title>
         <Date>{data.createdAt}</Date>
      </a>
   );
   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.CONFERENCE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
         isLink={false}
      />
   );
}

const Title = ({ children }: { children: React.ReactNode }) => (
   <div className='grow text-center truncate'>{children}</div>
);
const Date = ({ children }: { children: React.ReactNode }) => (
   <div>{String(children).slice(0, 10).replaceAll('-', '.')}</div>
);
