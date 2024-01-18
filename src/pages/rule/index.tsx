import { API_PATH, CONSTANTS } from 'constant';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import React from 'react';
import generateDate from 'shared/function/generateDate';

export default function RuleBoard() {
   const Cell = ({ data }: { data: IBoardList }) => (
      <div className='flex gap-2'>
         <Title>{data.title}</Title>
         <Date>{data.createdAt}</Date>
      </div>
   );
   return (
      <BoardLayout
         api={CONSTANTS.SERVER_URL + API_PATH.POST.RULE.ROOT}
         setCell={(data: IBoardList) => <Cell data={data} />}
         isFileLink={true}
      />
   );
}

const Title = ({ children }: { children: React.ReactNode }) => (
   <div className='grow text-center truncate'>{children}</div>
);
const Date = ({ children }: { children: React.ReactNode }) => <div>{generateDate(String(children))}</div>;
