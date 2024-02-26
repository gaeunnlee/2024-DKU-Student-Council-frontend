import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
   variant?: 'default' | 'naked';
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
}

export default function Button({ variant, className, children, onClick }: ButtonProps) {
   const buttonVariant = variant === 'default' ? 'bg-black' : 'bg-gray01';
   return (
      <ChakraButton className={`bg-black text-white ${className} ${buttonVariant}`} onClick={onClick}>
         {children}
      </ChakraButton>
   );
}
