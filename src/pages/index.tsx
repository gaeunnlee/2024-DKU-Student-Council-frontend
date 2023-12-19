import React, { useState } from 'react';
import { API_PATH } from 'constant';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { Banner, Notice, Petition, Cafeteria } from 'components/main';
import type { IBanner } from 'components/main/banner';
import type { INotice } from 'components/main/notice';
import type { IPetition } from 'components/main/petition';
import { useApi } from 'hooks/useApi';
import { useLayout } from 'hooks/useLayout';
import Service from 'components/main/service';

interface IMain {
   carousels: IBanner[];
   recentNotices: INotice[];
   popularPetitions: IPetition[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
}

export interface ICafeteria {
   mealData: string;
   breakfast: string;
   lunch: string;
   dinner: string;
   other: string;
}

export default function Main() {
   const [main, setMain] = useState<IMain | null>(null);
   const [cafeteria, setCafeteria] = useState<ICafeteria | null>(null);
   const { get } = useApi();
   const { setLayout } = useLayout();

   const fetchMain = async () => {
      const data = await get<IMain>(API_PATH.MAIN.ROOT);
      setMain(data);
   };

   const fetchMeal = async () => {
      const data = await get<ICafeteria | null>(API_PATH.MAIN.CAFETERIA);
      setCafeteria(data);
   };

   console.log(main);

   useEffectOnce(() => {
      fetchMain();
      fetchMeal();
      setLayout({
         title: null,
         backButton: false,
         isMain: true,
         fullscreen: false,
         heading: 'DANKOOK UNIVERSITY',
         subHeading: 'DANKOOK UNIV STUDENT COUNCIL',
      });
   });

   return (
      <main>
         <Banner banners={main?.carousels} />
         <div className='bg-gray-100 pt-5 pb-4'>
            <Notice notices={main?.recentNotices} />
            <Petition petitions={main?.popularPetitions} />
            <Cafeteria cafeteria={cafeteria || undefined} />
            <Service />
         </div>
      </main>
   );
}
