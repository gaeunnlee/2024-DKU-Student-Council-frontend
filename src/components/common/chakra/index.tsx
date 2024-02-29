import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'utils/styles';
import React from 'react';

export default function ChakraUIProvider({ children }: PropsWithChildren) {
   return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
