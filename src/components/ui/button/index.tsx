import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import Text from '../typo/text';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
   size: 'xl' | 'lg' | 'md';
   variant?: 'default' | 'white';
   children: string;
   className?: string;
   onClick?: () => void;
}

export default function Button({ size, variant, className, children, onClick, ...props }: ButtonProps) {
   const buttonVariant = variant === 'default' ? 'black' : 'gray01';
   const textColor = variant === 'default' ? 'white' : 'black';
   const buttonSize = {
      xl: '349px',
      lg: '336px',
      md: '316px',
   };
   return (
      <ChakraButton
         bg={`${buttonVariant}`}
         _focus={{ bg: 'current', textColor: 'black' }}
         _hover={{ bg: 'current' }}
         width={buttonSize[size]}
         className={`${className}`}
         onClick={onClick}
         {...props}
      >
         <Text textColor={textColor}>{children}</Text>
      </ChakraButton>
   );
}
