import Text from 'components/ui/typo/text';
import React from 'react';

export default function Service() {
   //TODO) ios,
   return (
      <section className='px-4 py-5 m-4'>
         <h3 className='font-bold text-lg ml-4 mb-4'>With-dankook</h3>
         <Text as='a' href='https://www.naver.com' rel='noreferrer'>
            www.naver.com
         </Text>
      </section>
   );
}
