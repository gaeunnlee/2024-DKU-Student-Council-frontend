import React, { ComponentProps } from 'react';

import { WithReactChildren } from '@/types/default-interfaces';

export default function SinglePageLayout({ children, ...props }: WithReactChildren & ComponentProps<'div'>) {
   return (
      <div className='p-3 flex flex-col gap-5' {...props}>
         {children}
      </div>
   );
}
