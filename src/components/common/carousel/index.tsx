import ArrowButton from '@components/common/carousel/ArrowButton';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

export default function Carousel({ data }: { data: string[] }) {
   const [index, setIndex] = React.useState(0);

   return (
      <div className='relative flex justify-center aspect-square overflow-hidden bg-gray-200 rounded-lg mt-2'>
         <ArrowButton type='previous' index={index} setIndex={setIndex} length={data.length} />
         <img className='size-full object-cover' src={data[index]} />
         <ArrowButton type='next' index={index} setIndex={setIndex} length={data.length} />
         <div className='absolute bottom-0 h-[30px] text-white flex gap-2'>
            {data.map((_, dotIndex) => (
               <GoDotFill className={index !== dotIndex ? 'text-slate-300' : ''} key={_} />
            ))}
         </div>
      </div>
   );
}
