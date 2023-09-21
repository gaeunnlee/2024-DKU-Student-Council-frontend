import React from 'react';
import { IWithReactChildren } from 'interfaces/default-interfaces';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, className, ...props }: DefaultLayoutProps) {
   return (
      <div className={`flex flex-col max-w-3xl mx-auto overflow-hidden ${className}`} {...props}>
         {children}
      </div>
   );
}
