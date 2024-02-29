import { Text as ChakraText } from '@chakra-ui/react';
import { TextProps as ChakraTextProps } from '@chakra-ui/react';
import React from 'react';

interface TextProps extends ChakraTextProps {
   children: string;
}

export default function Text({ children, ...props }: TextProps) {
   return <ChakraText {...props}>{children}</ChakraText>;
}
