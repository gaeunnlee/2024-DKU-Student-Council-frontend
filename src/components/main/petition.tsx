/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BaseSkeleton, TextSkeleton } from 'components/ui/skeleton';
import type { PetitionType } from 'shared/enum/petition';

export interface IPetition {
   id: number;
   title: string;
   petitionStatus: PetitionType;
   d_day: number;
}

/**
 * @description 메인 페이지의 인기청원 컴포넌트
 */
export default function Petition({ petitions }: { petitions?: IPetition[] }) {
   return petitions ? (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <h3 className='font-bold text-lg'>청원게시판</h3>
         <ul className='mt-3'>
            {petitions?.map((item) => (
               <li key={item.id} className='flex items-center justify-between my-1'>
                  <span className='text-sm'>{item.title}</span>
                  <span className='text-xs text-gray-500'>D-{item.d_day}</span>
               </li>
            ))}
         </ul>
      </section>
   ) : (
      <BaseSkeleton className='px-4 py-5 m-4 rounded-xl'>
         <h3 className='font-bold text-lg'>청원게시판</h3>
         <ul className='mt-4'>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full' width={7} />
               <TextSkeleton className='my-1 rounded-full' width={3} />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full' width={15} />
               <TextSkeleton className='my-1 rounded-full' width={2} />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full' width={10} />
               <TextSkeleton className='my-1 rounded-full' width={3} />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full' width={17} />
               <TextSkeleton className='my-1 rounded-full' width={2} />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full' width={14} />
               <TextSkeleton className='my-1 rounded-full' width={2} />
            </li>
         </ul>
      </BaseSkeleton>
   );
}
