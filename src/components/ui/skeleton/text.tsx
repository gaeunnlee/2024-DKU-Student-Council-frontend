import React from 'react';

export default function TextSkeleton({ className, ...props }: React.ComponentProps<'div'>) {
   return <div className={`animate-pulse bg-gray-400 h-3 ${className}`} {...props} />;
}
