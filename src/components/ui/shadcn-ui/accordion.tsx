'use client';

import SvgIcon from '@components/common/icon/SvgIcon';
import { cn } from '@libs/shadcn';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Item>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
   <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
   //TODO) 애니메이션 처리

   <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
         ref={ref}
         className={cn(
            'flex flex-1 items-center text-white justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180 pl-[17px] pr-[27px]',
            className,
         )}
         {...props}
      >
         {children}
         <SvgIcon id='arrow_down' width={19} height={9} />
      </AccordionPrimitive.Trigger>
   </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
   React.ElementRef<typeof AccordionPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
   <AccordionPrimitive.Content
      ref={ref}
      className='overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down bg-gray04 cursor-pointer text-white flex items-center justify-between pl-[40px] pr-8'
      {...props}
   >
      <span className={cn('block py-[15px] data-[state=closed]:animate-accordion-up', className)}>
         {children}
      </span>
      <SvgIcon id='arrow_right' width={15} height={12} />
   </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
