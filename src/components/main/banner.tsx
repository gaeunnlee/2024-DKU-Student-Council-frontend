import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { BaseSkeleton } from 'components/ui/skeleton';

export const BannerSize = 'w-full h-[120px]';

export interface IBanner {
   id: number;
   url: string;
   redirectUrl: string | null;
}

/**
 * @description 메인 페이지의 배너 컴포넌트
 */
export default function Banner({ banners }: { banners?: IBanner[] }) {
   return banners ? (
      <Swiper
         autoplay={{ delay: 1000 }}
         navigation
         pagination={{ clickable: true }}
         className={BannerSize}
         spaceBetween={16}
      >
         {banners?.map((item) => (
            <SwiperSlide key={item.id} className='w-full overflow-hidden'>
               <img src={item.url} alt='banner' className='h-full w-full object-cover shadow-md' />
            </SwiperSlide>
         ))}
      </Swiper>
   ) : (
      <BaseSkeleton className={`${BannerSize}`} />
   );
}
