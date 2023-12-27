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

export default function Main() {
   const [main, setMain] = useState<IMain>();
   const { get } = useApi();
   const { setLayout } = useLayout();

   const fetchMain = async () => {
      const data = await get<IMain>(API_PATH.MAIN.ROOT, {
         authenticate: true,
         log: true,
         contentType: 'application/json',
      });
      setMain(data);
   };

   useEffectOnce(() => {
      fetchMain();
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
            <Cafeteria />
            <Service />
         </div>
      </main>
   );
}
