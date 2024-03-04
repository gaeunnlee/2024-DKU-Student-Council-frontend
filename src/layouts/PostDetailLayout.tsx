import React, { ComponentProps } from 'react';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';

export default function PostDetailLayout({ children, ...props }: IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div className='p-5 flex flex-col gap-5' {...props}>
         {children}
      </div>
   );
}
