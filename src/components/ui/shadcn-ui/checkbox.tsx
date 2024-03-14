'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@utils/shadcn';
import { Check } from 'lucide-react';
import * as React from 'react';

export interface CheckboxShadcnProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxShadcnProps>(
   ({ className, ...props }, ref) => (
      <CheckboxPrimitive.Root
         ref={ref}
         className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-gray02 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=checked]:text-white',
            className,
         )}
         {...props}
      >
         <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
            <Check className='h-4 w-4' />
         </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
   ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
