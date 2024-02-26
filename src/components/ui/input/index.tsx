import { Input as ChakraInput } from '@chakra-ui/react';
import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import Text from 'components/ui/typo/text';
import React from 'react';

interface InputProps extends ChakraInputProps {
   size?: 'md' | 'lg';
   label?: string;
   children?: string;
   className?: string;
   isSuccess?: boolean;
   message?: string | null;
}

export default function Input({
   label,
   size,
   children,
   className,
   isSuccess,
   message,
   ...props
}: InputProps) {
   console.log(isSuccess);
   const sizeClass = size === 'md' ? 'w-[311px] py-4' : 'w-[336px] py-4';

   return (
      <div className='flex flex-col gap-[2px]'>
         {label && <Text className='text-gray02 text-[15px]'>{label}</Text>}
         <ChakraInput className={`${className} ${sizeClass} bg-gray01 pl-5`} {...props}>
            {children}
         </ChakraInput>
         {message && <Text className='text-center text-[11px]'>{message}</Text>}
      </div>
   );
}
