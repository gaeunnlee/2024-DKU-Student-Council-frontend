import React, { useState } from 'react';
import { API_PATH } from 'constant';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { Banner, Notice, Petition } from 'components/main';
import type { IBanner } from 'components/main/banner';
import type { INotice } from 'components/main/notice';
import type { IPetition } from 'components/main/petition';
import { useApi } from 'hooks/useApi';

interface IMain {
   carousels: IBanner[];
   recentNews: INotice[];
   popularPetitions: IPetition[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
}

export default function Main() {
   const [main, setMain] = useState<IMain | null>(null);
   const { get } = useApi();

   const fetchMain = async () => {
      const data = await get<IMain>(API_PATH.MAIN.ROOT);
      setMain(data);
   };

   useEffectOnce(() => {
      fetchMain();
   });

   return (
      <main className='rounded-t-xl'>
         <div className='px-6 pt-5 pb-4'>
            <h1 className='text-4xl font-bold'>Dankook University</h1>
            <h2 className='text-2xl font-medium mb-2'>도전하는 지성, 세계를 향한 창조</h2>
            <span className='text-xs'>DANKOOK UNIVERSITY STUDENT COUNCIL</span>
         </div>
         <Banner banners={main?.carousels} />
         <Notice notices={main?.recentNews} />
         <Petition petitions={main?.popularPetitions} />
      </main>
   );
}
