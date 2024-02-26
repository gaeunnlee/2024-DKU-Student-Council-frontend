import { Heading as ChakraHeading } from '@chakra-ui/react';
import { HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';
import React from 'react';

interface HeadingProps extends ChakraHeadingProps {
   children: string;
}

export default function Heading({ children, ...props }: HeadingProps) {
   return <ChakraHeading {...props}>{children}</ChakraHeading>;
}
