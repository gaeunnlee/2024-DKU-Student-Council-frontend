import { Text as ChakraText } from '@chakra-ui/react';
import { TextProps as ChakraTextProps } from '@chakra-ui/react';
import React from 'react';

interface TextProps extends ChakraTextProps {
   children: string;
   href?: string;
}

export default function Text({ children, href, ...props }: TextProps) {
   return (
      <ChakraText href={href} target={href ? '_blank' : ''} {...props}>
         {children}
      </ChakraText>
   );
}
