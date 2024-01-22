import React from 'react';
import clsx from 'clsx';

interface Props extends React.ComponentProps<'button'> {
   variant?: 'primary' | 'red' | 'black';
}

export default function Button({ variant, className, ...props }: Props) {
   const style = {
      primary: 'text-white bg-blue-600',
      red: 'text-white bg-red-700',
      black: 'text-white bg-black',
   };
   return (
      <button
         className={`${clsx('rounded-full px-4 py-2', className)} ${variant && style[variant]}`}
         {...props}
      />
   );
}
