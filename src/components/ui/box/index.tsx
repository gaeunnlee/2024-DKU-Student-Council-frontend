import React, { ComponentProps } from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

export default function Box({
   children,
   className,
   type,
   padding,
   ...props
}: IWithReactChildren & ComponentProps<'div'> & { type?: 'shadow' | 'shadowImage'; padding?: string }) {
   const boxType = {
      shadow: { boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.1)', border: 'none' },
      shadowImage: { padding: '0', boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.1)' },
   };

   return (
      <div
         className={`${
            padding ? `p-${padding}` : 'p-4'
         } bg-white border border-gray-200 rounded-lg transition-opacity animate-fadeIn overflow-hidden ${
            className ?? ''
         } `}
         style={type && boxType[type]}
         {...props}
      >
         {children}
      </div>
   );
}
