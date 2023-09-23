import React from 'react';

export interface TextSkeletonProps extends React.ComponentProps<'div'> {
   width: number;
   height?: number;
}

export default function TextSkeleton({ className, width, height, ...props }: TextSkeletonProps) {
   return (
      <div
         className={`animate-pulse bg-gray-300 h-3  ${className ?? ''}`}
         style={{ height: `${height}rem`, width: `${width}rem` }}
         {...props}
      />
   );
}
