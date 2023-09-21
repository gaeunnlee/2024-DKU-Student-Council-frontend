import React from 'react';

export default function Main() {
   return (
      <main>
         <div className='px-4 pt-5 pb-10'>
            <h1 className='text-4xl font-bold'>Dankook University</h1>
            <h2 className='text-2xl font-medium mb-2'>도전하는 지성, 세계를 향한 창조</h2>
            <span className='text-xs'>DANKOOK UNIVERSITY STUDENT COUNCIL</span>
         </div>
         <img
            src={
               'https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_34f4838a2b3047f39ac9cb0701558e46/main-storage/carousel-d2dd283a-bb34-43a9-9180-9d93bf1c4c37.png'
            }
            style={{ width: '100vw' }}
            alt='banner'
         />
      </main>
   );
}
