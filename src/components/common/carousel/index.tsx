import { CarouselType } from '@hooks/api/main/useGetMain';
import React, { Fragment } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

interface CarouselContentProps extends CarouselType {
   mimeType?: string;
   originalName?: string;
   thumbnailUrl?: string;
}

interface CarouselProps {
   data: CarouselContentProps[];
   className?: string;
}

export default function Carousel({ data, className }: CarouselProps) {
   const [currentIndex, setCurrentIndex] = React.useState(0);

   const handlePrevClick = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      }
   };

   const handleNextClick = () => {
      if (currentIndex < data.length - 1) {
         setCurrentIndex(currentIndex + 1);
      }
   };

   return (
      <div
         className={`${
            className ?? ''
         }relative flex justify-center aspect-square overflow-hidden bg-gray-200 rounded-lg mt-2`}
      >
         <div className='flex h-full items-center'>
            <FaChevronCircleLeft
               className='drop-shadow-md hover:text-black cursor-pointer absolute left-5'
               onClick={handlePrevClick}
            />
            <FaChevronCircleRight
               className='drop-shadow-md hover:text-black cursor-pointer absolute right-5'
               onClick={handleNextClick}
            />
         </div>
         <div className='absolute bottom-0 h-[30px] text-white flex gap-2'>
            {data.map((_, index) => (
               <GoDotFill key={index} className={index === currentIndex ? '' : 'text-slate-300'} />
            ))}
         </div>
         {data.map((item, index) => (
            <Fragment key={item.id}>
               {index === currentIndex && (
                  <Fragment>
                     <img
                        className='size-full object-cover'
                        src={item.url}
                        alt={`carousel-item-${item.id}`}
                     />
                  </Fragment>
               )}
            </Fragment>
         ))}
      </div>
   );
}
