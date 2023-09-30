import React from 'react';

export default function BaseSkeleton({ className, ...props }: React.ComponentProps<'div'>) {
   return <div className={`animate-pulse bg-gray-200 ${className}`} {...props} />;
}
