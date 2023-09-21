import React from 'react';

export default function Input({ className, ...props }: React.ComponentProps<'input'>) {
   return (
      <input
         className={`flex border-none rounded-full bg-gray-200 text-sm px-6 py-4 focus:outline-none ${className}`}
         {...props}
      />
   );
}
