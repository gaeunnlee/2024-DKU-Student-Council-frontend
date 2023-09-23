import React from 'react';
import Box from 'components/ui/box';
import { BaseSkeleton, TextSkeleton } from 'components/ui/skeleton';
import { ComponentProps } from 'react';

interface BoardProps extends ComponentProps<'ol'> {
   skeletonCount?: number;
   emptiable?: boolean;
}

interface CellProps extends ComponentProps<'li'> {}

/**
 * 게시판 컴포넌트
 * @param {number} skeletonCount - 스켈레톤 개수
 * @param {boolean} emptiable - 데이터가 없을 수 있는지
 * @returns
 */
export default function Board({
   children,
   className,
   skeletonCount = 10,
   emptiable = false,
   ...props
}: BoardProps) {
   return (
      <ol className={`flex flex-col p-4 gap-4 ${className}`} {...props}>
         {children ??
            (emptiable ? (
               <span className='m-auto text-gray-400 font-light'>데이터가 없습니다.</span>
            ) : (
               Array.from({ length: skeletonCount }).map((_, idx) => (
                  <BaseSkeleton
                     key={idx}
                     className='p-4 my-[1px] rounded-lg h-full flex justify-between items-center'
                  >
                     <TextSkeleton className='rounded-full' width={4} height={1} />
                  </BaseSkeleton>
               ))
            ))}
      </ol>
   );
}

Board.Cell = function Cell({ children, className, ...props }: CellProps) {
   return (
      <li {...props}>
         <Box className={className}>{children}</Box>
      </li>
   );
};
