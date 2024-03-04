import React from 'react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BaseSkeleton } from 'components/ui/skeleton';
import { IBanner } from 'api/main/types/main';

export const BannerSize = 'w-[322px] h-[322px] absolute top-44';

export default function Banner({ banners }: { banners: IBanner[] }) {
   SwiperCore.use([Autoplay]);

   return (
      <div className='w-full h-[337px] flex justify-center'>
         {banners.length > 0 ? (
            <Swiper
               autoplay={{ delay: 2000, disableOnInteraction: false }}
               modules={[Autoplay, Pagination]}
               pagination={{ clickable: true }}
               className={BannerSize}
               spaceBetween={16}
            >
               {banners?.map((item) => (
                  <SwiperSlide key={item.id}>
                     <img src={item.url} alt='banner' className='w-full h-full object-cover rounded-lg' />
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <BaseSkeleton className={`${BannerSize} rounded-lg`} />
         )}
      </div>
   );
}
