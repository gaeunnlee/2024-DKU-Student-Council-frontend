import { Text as ChakraMessage } from '@chakra-ui/react';
import { TextProps as ChakraTextProps } from '@chakra-ui/react';
import React from 'react';

interface MessageProps extends ChakraTextProps {
   children: string | null;
}

export default function Message({ children, ...props }: MessageProps) {
   return (
      <ChakraMessage className='block text-[10px] text-center' {...props}>
         {children}
      </ChakraMessage>
   );
}
