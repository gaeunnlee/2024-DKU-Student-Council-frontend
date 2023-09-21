import React from 'react';
import clsx from 'clsx';

interface Props extends React.ComponentProps<'button'> {
   variant?: 'primary' | 'red';
}

export default function Button({ variant, className, ...props }: Props) {
   return (
      <button
         className={clsx(
            'rounded-full px-4 py-2',
            variant === 'primary' ? 'bg-blue-600' : variant === 'red' ? 'bg-red-700' : 'bg-white',
            variant === 'primary' ? 'text-white' : variant === 'red' ? 'text-white' : 'text-black',
            className,
         )}
         {...props}
      />
   );
}
