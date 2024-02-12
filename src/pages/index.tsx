import { API_PATH } from 'constants/api';
import { HeadingStyle } from 'constants/style';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { Banner, Notice, Petition, Cafeteria } from 'components/main';
import type { IBanner } from 'components/main/banner';
import type { INotice } from 'components/main/notice';
import type { IPetition } from 'components/main/petition';
import { useApi } from 'hooks/useApi';
import { useLayout } from 'hooks/useLayout';
import Service from 'components/main/service';
import React, { useState } from 'react';
import { useFetchMyInfo } from 'hooks/useFetchMyInfo';

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
   const [main, setMain] = useState<IMain | null>();
   const { get } = useApi();
   const { setLayout } = useLayout();
   const { fetchMyInfo } = useFetchMyInfo();

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
      fetchMyInfo();
      setLayout({
         title: null,
         backButton: false,
         isMain: true,
         fullscreen: false,
         heading: 'DANKOOK UNIVERSITY',
         subHeading: 'DANKOOK UNIV STUDENT COUNCIL',
         headingStyle: HeadingStyle.main.HeadingStyle,
         subHeadingStyle: HeadingStyle.main.subHeadingStyle,
         margin: '',
         rounded: false,
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
