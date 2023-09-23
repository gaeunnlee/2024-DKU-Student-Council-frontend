import Box from 'components/ui/box';
import React, { cloneElement } from 'react';
import { ComponentProps } from 'react';

interface BoardProps extends ComponentProps<'ol'> {
   skeletonCount?: number;
   skeleton?: React.ReactNode;
}

interface CellProps extends ComponentProps<'li'> {}

export default function Board({ children, className, skeletonCount = 10, skeleton, ...props }: BoardProps) {
   return (
      <ol className={`flex flex-col p-4 gap-4 ${className}`} {...props}>
         {children ??
            Array.from({ length: skeletonCount }).map((_, idx) =>
               cloneElement(skeleton as React.ReactElement, { key: idx }),
            )}
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
