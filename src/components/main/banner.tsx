import 'swiper/css';
import { CarouselType } from '@hooks/api/main/useGetMain';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerSize = 'w-[322px] h-[322px] absolute top-44';

export default function Banner({ banners }: { banners: CarouselType[] }) {
   SwiperCore.use([Autoplay]);
   const navigate = useNavigate();

   return (
      <div className='w-full h-[337px] flex justify-center'>
         <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            className={BannerSize}
            spaceBetween={16}
         >
            {banners?.map((item) => (
               <SwiperSlide key={item.id}>
                  <img
                     onClick={() => {
                        item.redirectUrl && navigate(item.redirectUrl);
                     }}
                     src={item.url}
                     alt='banner'
                     className={`w-full h-full object-cover rounded-lg ${
                        item.redirectUrl && 'cursor-pointer'
                     }`}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
