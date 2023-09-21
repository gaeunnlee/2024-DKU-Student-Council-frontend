import { CONSTANTS } from 'constant';
import React from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, className, ...props }: DefaultLayoutProps) {
   return (
      <div
         className={`flex flex-col max-w-3xl mx-auto overflow-y-auto overflow-x-hidden ${
            typeof className !== 'undefined' ? className : ''
         }`}
         style={{ marginBottom: CONSTANTS.bottomNavSize }}
         {...props}
      >
         {children}
      </div>
   );
}
