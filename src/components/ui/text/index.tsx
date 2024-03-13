import TextSkeleton from '@components/ui/skeleton/text';
import React from 'react';

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

export function Title({ className, children }: { className?: string; children: React.ReactNode }) {
   return (
      <Text className={`${className}`} length={4}>
         {children}
      </Text>
   );
}
