import { cn } from '@libs/shadcn';
import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
   size?: 'md' | 'lg' | 'full';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, size, ...props }, ref) => {
   const sizeClass = {
      md: 'w-[311px] py-[15px]',
      lg: 'w-[336px] py-[15px]',
      full: 'w-100',
   };
   return (
      <React.Fragment>
         <input
            type={type}
            className={cn(
               `${
                  size && sizeClass[size]
               } bg-gray01 rounded-[10px] flex border border-input pl-5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[14px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
               className,
            )}
            ref={ref}
            {...props}
         />
      </React.Fragment>
   );
});
Input.displayName = 'Input';

export { Input };
