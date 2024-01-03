import React from 'react';
import Text from 'components/ui/text';

export default function Title({ content }: { content: string }) {
   return (
      <Text className='text-xl font-bold' length={4}>
         {content}
      </Text>
   );
}

export function Date({ content }: { content: string }) {
   return (
      <Text className='text-gray-400' length={4}>
         {content.slice(0, 10).replaceAll('-', '.')}
      </Text>
   );
}
