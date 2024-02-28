import { Input as ChakraInput } from '@chakra-ui/react';
import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import Text from 'components/ui/typo/text';
import React from 'react';

interface InputProps extends ChakraInputProps {
   size?: 'md' | 'lg' | 'full';
   label?: string;
   children?: string;
   className?: string;
}

export default function Input({ label, size, children, className, ...props }: InputProps) {
   const sizeClass = {
      md: '311px',
      lg: '336px',
      full: '100%',
   };

   return (
      <div className='flex flex-col gap-[2px]'>
         {label && (
            <Text color='gray02' className='ml-2'>
               {label}
            </Text>
         )}
         <ChakraInput
            bg='gray01'
            fontSize='14px'
            width={sizeClass[size ?? 'md']}
            padding='py-4'
            focusBorderColor='transparent'
            className={`${className} ${sizeClass} pl-5 placeholder:text-[14px]`}
            {...props}
         >
            {children}
         </ChakraInput>
      </div>
   );
}
