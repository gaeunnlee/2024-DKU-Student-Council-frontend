import React, { useState } from 'react';
import axios from 'axios';
import { API_PATH } from 'constant';
import { useAlert } from 'hooks/useAlert';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { PetitionType } from 'shared/enum/petition';
import { Banner, Notice } from 'components/main';
import type { IBanner } from 'components/main/banner';
import type { INotice } from 'components/main/notice';

interface IMain {
   carousels: IBanner[];
   recentNews: INotice[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
   popularPetitions: [
      {
         id: number;
         title: string;
         petitionStatus: PetitionType;
         d_day: number;
      },
   ];
}

export default function Main() {
   const { alert } = useAlert();
   const [main, setMain] = useState<IMain | null>(null);

   const fetchMain = async () => {
      try {
         const { data } = await axios.get<IMain>(API_PATH.MAIN.ROOT);
         setMain(data);
      } catch (e) {
         if (axios.isAxiosError<unknown>(e)) alert(e);
      }
   };

   useEffectOnce(() => {
      fetchMain();
   });

   return (
      <main>
         <div className='px-4 pt-5 pb-4'>
            <h1 className='text-4xl font-bold'>Dankook University</h1>
            <h2 className='text-2xl font-medium mb-2'>도전하는 지성, 세계를 향한 창조</h2>
            <span className='text-xs'>DANKOOK UNIVERSITY STUDENT COUNCIL</span>
         </div>
         <Banner banners={main?.carousels} />
         <Notice notices={main?.recentNews} />
      </main>
   );
}
