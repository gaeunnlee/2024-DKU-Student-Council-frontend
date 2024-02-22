import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
   children: React.ReactNode;
   className?: string;
   onClick?: () => void;
}

export default function Button({ className, children, onClick }: ButtonProps) {
   return (
      <ChakraButton className={`bg-black text-white ${className}`} onClick={onClick}>
         {children}
      </ChakraButton>
   );
}
