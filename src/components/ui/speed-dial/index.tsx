import React from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

type SpeedDialProps = IWithReactChildren & React.ComponentProps<'div'>;

export default function SpeedDial({ children, className, ...props }: SpeedDialProps) {
   return (
      <div
         className={`fixed bottom-20 right-[1rem] z-50 flex items-end justify-end ${className ?? ''}`}
         {...props}
      >
         {children}
      </div>
   );
}
