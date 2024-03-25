import Box from '@components/ui/box';
import { ComponentProps } from 'react';
import React from 'react';

type BoardProps = ComponentProps<'ol'>;
type CellProps = ComponentProps<'li'>;

/**
 * 게시판 컴포넌트
 * 0.3초 안에 데이터가 들어오지 않으면 스켈레톤 UI가 나타납니다.
 * @param {number} size - 스켈레톤 개수
 * @returns
 */
export default function Board({ children, className, ...props }: BoardProps) {
   return (
      <ol className={`${className ?? ''}flex flex-col p-4 gap-4`} {...props}>
         {children}
      </ol>
   );
}

Board.Cell = function Cell({ children, className, ...props }: CellProps) {
   return (
      <li {...props}>
         <Box
            padding='0'
            border='border-none'
            className={className + 'rounded-xl shadow-[2px_2px_5px_2px_#00000010] text-sm cursor-pointer'}
         >
            {children}
         </Box>
      </li>
   );
};

Board.NoData = function NoData() {
   return <span className='m-auto text-sm text-gray-500 font-light'>데이터가 없어요 ;(</span>;
};
