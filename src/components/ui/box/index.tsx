import React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
   type?: 'shadow' | 'shadowImage';
   padding?: string;
   border?: string;
}

export default function Box({ children, className, type, padding, border, ...props }: BoxProps) {
   const boxType = {
      shadow: { boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.1)', border: 'none' },
      shadowImage: { padding: '0', boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.1)' },
   };

   return (
      <div
         className={`p-${padding ?? 4} ${
            border ?? 'border border-gray-200'
         } bg-white rounded-lg transition-opacity animate-fadeIn overflow-hidden ${className ?? ''} `}
         style={type && boxType[type]}
         {...props}
      >
         {children}
      </div>
   );
}
