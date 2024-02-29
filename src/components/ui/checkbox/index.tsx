import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';
import React from 'react';

interface CheckboxProps extends ChakraCheckboxProps {}

export default function Checkbox({ ...props }: CheckboxProps) {
   return <ChakraCheckbox size='md' {...props} className='!flex items-center' />;
}
