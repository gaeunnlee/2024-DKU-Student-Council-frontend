import React from 'react';
import Text from 'components/ui/text';
import generateDate from 'shared/function/generateDate';

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
         {generateDate(content)}
      </Text>
   );
}
