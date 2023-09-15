import React from 'react';

import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
   return (
      <div className={'max-w-3xl mx-auto overflow-hidden'} {...props}>
         {children}
      </div>
   );
}
