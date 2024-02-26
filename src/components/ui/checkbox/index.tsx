import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';
import React from 'react';

interface CheckboxProps extends ChakraCheckboxProps {
   className?: string;
}

export default function Checkbox({ className, ...props }: CheckboxProps) {
   return (
      <ChakraCheckbox
         spacing='1rem'
         size={'lg'}
         colorScheme='red'
         className={className}
         {...props}
      ></ChakraCheckbox>
   );
}
