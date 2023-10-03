import React, { ComponentProps } from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

export default function Box({ children, className, ...props }: IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div
         className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm transition-opacity animate-fadeIn ${
            className ?? ''
         }`}
         {...props}
      >
         {children}
      </div>
   );
}
