import React from 'react';
import { TextSkeleton } from '../skeleton';

interface Props extends React.ComponentProps<'div'> {
   length: number;
   height?: number;
}

export default function Text({ length, height, children, ...props }: Props) {
   return (
      <div {...props}>
         {children ?? <TextSkeleton width={length} height={height} className='rounded-md my-1' />}
      </div>
   );
}
