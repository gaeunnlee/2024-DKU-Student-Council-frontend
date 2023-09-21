import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constant';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { BaseSkeleton } from 'components/ui/skeleton';

export const BannerSize = 'w-[calc(100%-8px)] h-[130px]';

interface IBanner {
   id: number;
   url: string;
   redirectUrl: string | null;
}

export default function Banner() {
   const [banner, setBanner] = React.useState<IBanner[] | undefined>(undefined);

   const fetchBanner = async () => {
      const res = await axios.get<IBanner[]>(API_PATH.MAIN.CAROUSEL);
      setBanner(res.data);
      console.log(res.data);
   };

   React.useEffect(() => {
      fetchBanner();
   }, []);

   return banner ? (
      <Swiper
         autoplay={{ delay: 1000 }}
         navigation
         pagination={{ clickable: true }}
         className={BannerSize}
         spaceBetween='8px'
      >
         {banner?.map((item) => (
            <SwiperSlide key={item.id} className='w-[100%] overflow-hidden'>
               <img src={item.url} alt='banner' className='h-[100%] object-cover rounded-xl shadow-md' />
            </SwiperSlide>
         ))}
      </Swiper>
   ) : (
      <BaseSkeleton className={`${BannerSize} rounded-xl m-auto`} />
   );
}
