import { Banner, Notice, Petition, Cafeteria } from '@components/main';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useGetMain } from '@hooks/query/main/query';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useFetchMyInfo } from '@hooks/useFetchMyInfo';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function Main() {
   const { setLayout } = useLayout();
   const { fetchMyInfo } = useFetchMyInfo();
   const { data: main } = useGetMain();

   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: null,
         backButton: false,
         isMain: true,
         fullscreen: false,
         headingText: HEADING_TEXT.MAIN.HEAD,
         subHeadingText: HEADING_TEXT.MAIN.SUBHEAD,
         headingStyle: HEADING_STYLE.MAIN.HEAD,
         subHeadingStyle: HEADING_STYLE.MAIN.SUBHEAD,
         rounded: false,
      });
   });

   return (
      <React.Fragment>
         <Banner banners={main?.carousels ?? []} />
         <div className='bg-gray-100 pt-5 pb-4'>
            <Notice notices={main?.recentNotices} />
            <Petition petitions={main?.popularPetitions} />
            <Cafeteria />
         </div>
      </React.Fragment>
   );
}
