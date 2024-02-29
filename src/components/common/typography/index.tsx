import { Text } from '@chakra-ui/react';
import { TextProps as ChakraTextProps } from '@chakra-ui/react';
import React from 'react';

interface TextProps extends ChakraTextProps {
   children: string;
}

export default function Typography({ children }: TextProps) {
   return <Text>{children}</Text>;
}
