import React from 'react';
import Box from 'components/ui/box';
import { BaseSkeleton, TextSkeleton } from 'components/ui/skeleton';
import { ComponentProps } from 'react';
import Delay from 'layouts/Delay';

type BoardProps = ComponentProps<'ol'>;
type CellProps = ComponentProps<'li'>;

interface LoadingProps {
   size?: number;
}

/**
 * 게시판 컴포넌트
 * 0.3초 안에 데이터가 들어오지 않으면 스켈레톤 UI가 나타납니다.
 * @param {number} size - 스켈레톤 개수
 * @returns
 */
export default function Board({ children, className, ...props }: BoardProps) {
   return (
      <ol className={`flex flex-col p-4 gap-4 ${className}`} {...props}>
         {children ?? (
            <Delay>
               <Board.Loading size={20} />
            </Delay>
         )}
      </ol>
   );
}

Board.Loading = function Loading({ size = 10 }: LoadingProps) {
   return Array.from({ length: size }).map((_, idx) => (
      <BaseSkeleton key={idx} className='p-4 my-[1px] rounded-lg h-full flex justify-between items-center'>
         <TextSkeleton className='rounded-full' width={4} height={1} />
      </BaseSkeleton>
   ));
};

Board.Cell = function Cell({ children, className, ...props }: CellProps) {
   return (
      <li {...props}>
         <Box className={className}>{children}</Box>
      </li>
   );
};

Board.NoData = function NoData() {
   return <span className='m-auto text-sm text-gray-500 font-light'>데이터가 없어요 ;(</span>;
};
