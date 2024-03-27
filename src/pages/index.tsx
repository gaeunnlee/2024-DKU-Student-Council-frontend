import Carousel from '@components/common/carousel';
import { Notice, Petition, Cafeteria, AppDownload } from '@components/main/';
import NoticeSkeleton from '@components/ui/skeleton/main';
import { Spinner } from '@components/ui/spinner/indext';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import useGetMain from '@hooks/api/main/useGetMain';
import { useEffectOnce } from '@hooks/useEffectOnce';
// import { useFetchMyInfo } from '@hooks/useFetchMyInfo';
import { useLayout } from '@hooks/useLayout';
import React, { Suspense } from 'react';

export default function Main() {
   const { setLayout } = useLayout();
   // const { fetchMyInfo } = useFetchMyInfo();
   const { data: main } = useGetMain();

   useEffectOnce(() => {
      // fetchMyInfo();
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
         <div className='w-full h-[337px] flex justify-center'>
            <Suspense fallback={<Spinner />}>
               <Carousel
                  data={main?.carousels ?? []}
                  className='w-[322px] h-[322px] absolute top-44 mx-auto'
               />
            </Suspense>
         </div>
         <div className='bg-gray-100 pt-5 pb-4'>
            <Suspense fallback={<NoticeSkeleton />}>
               <Notice notices={main?.recentNotices} />
            </Suspense>
            <Suspense fallback={<NoticeSkeleton />}>
               <Petition petitions={main?.popularPetitions} />
            </Suspense>
            <Cafeteria />
            <AppDownload />
         </div>
      </React.Fragment>
   );
}
