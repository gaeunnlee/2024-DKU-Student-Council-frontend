import React from 'react';
import Text from 'components/ui/text';
import generateDate from 'shared/function/generateDate';

export default function Title({ content, className }: { content: string; className?: string }) {
   return (
      <Text className={`${className}`} length={4}>
         {content}
      </Text>
   );
}

export function Date({ content, className }: { content: string; className?: string }) {
   return (
      <Text className={`${className}`} length={4}>
         {generateDate(content)}
      </Text>
   );
}
