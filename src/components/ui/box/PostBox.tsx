import React, { ComponentProps } from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

export default function PostBox({
   children,
   className,
   ...props
}: IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div
         className={`p-4 bg-white rounded-lg shadow-[2px_2px_5px_2px_#00000010] m-5 leading-8 transition-opacity animate-fadeIn ${
            className ?? ''
         }`}
         {...props}
      >
         {children}
      </div>
   );
}

export function FileBox({ children, className, ...props }: IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div
         className={`px-4 bg-white rounded-lg shadow-[2px_2px_5px_2px_#00000010] m-5 leading-5 transition-opacity animate-fadeIn ${
            className ?? ''
         }`}
         {...props}
      >
         {children}
      </div>
   );
}
