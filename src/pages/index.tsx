import React, { Suspense } from 'react';

const Banner = React.lazy(() => import('components/main/banner'));

export default function Main() {
   return (
      <main>
         <div className='px-4 pt-5 pb-10'>
            <h1 className='text-4xl font-bold'>Dankook University</h1>
            <h2 className='text-2xl font-medium mb-2'>도전하는 지성, 세계를 향한 창조</h2>
            <span className='text-xs'>DANKOOK UNIVERSITY STUDENT COUNCIL</span>
         </div>
         <Suspense fallback={<div>Loading...</div>}>
            <Banner />
         </Suspense>
      </main>
   );
}
