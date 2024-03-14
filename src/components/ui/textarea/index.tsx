import { cn } from '@utils/shadcn';
import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
   return (
      <textarea
         className={cn(
            'flex min-h-[80px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
            className,
         )}
         ref={ref}
         {...props}
      />
   );
});
Textarea.displayName = 'Textarea';

export { Textarea };
