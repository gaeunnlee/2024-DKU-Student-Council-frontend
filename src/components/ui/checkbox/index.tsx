import React from 'react';

import { Checkbox as ShadcnCheckbox } from '@/components/ui/shadcn-ui/checkbox';
import { CheckboxShadcnProps } from '@/components/ui/shadcn-ui/checkbox';

interface CheckboxProps extends CheckboxShadcnProps {
   direction?: 'left' | 'right';
   children: React.ReactNode;
}

export default function Checkbox({ direction = 'left', children, ...props }: CheckboxProps) {
   const checkboxPosition = direction === 'right' ? 'flex-row-reverse' : '';
   return (
      <div className={`flex items-center ${checkboxPosition} gap-2`}>
         <ShadcnCheckbox {...props} />
         {children}
      </div>
   );
}
