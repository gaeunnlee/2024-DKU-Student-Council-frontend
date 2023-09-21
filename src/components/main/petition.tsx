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
      // <div className='px-4 py-5 m-4 rounded-xl bg-gray-100'>
      //    <h3 className='font-bold text-lg'>실시간 인기 청원</h3>
      //    <ul className='mt-3'>
      //       {petitions?.map((item) => (
      //          <li key={item.id} className='flex items-center justify-between my-1'>
      //             <span className='text-sm'>{item.title}</span>
      //             <span className='text-xs text-gray-500'>D-{item.d_day}</span>
      //          </li>
      //       ))}
      //    </ul>
      // </div>
      <ol className='relative px-4 border-l border-gray-200 flex flex-col gap-4'>
         {petitions.map((item) => (
            <div key={item.id} className='flex items-center justify-between gap-3'>
               <span className='flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full ring-8 ring-white '>
                  <img className='rounded-full shadow-lg' src='/docs/images/people/profile-picture-3.jpg' />
               </span>
               <div className='items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex-1'>
                  <time className='mb-1 text-xs font-normal text-gray-400'>{item.d_day}일 남음</time>
                  <div className='text-sm font-normal text-gray-500 '>{item.title}</div>
               </div>
            </div>
         ))}
      </ol>
   ) : (
      <BaseSkeleton className='px-4 py-5 m-4 rounded-xl'>
         <h3 className='font-bold text-lg'>실시간 인기 청원</h3>
         <ul className='mt-4'>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full w-[7rem]' />
               <TextSkeleton className='my-1 rounded-full w-[3rem]' />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full w-[15rem]' />
               <TextSkeleton className='my-1 rounded-full w-[2rem]' />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full w-[10rem]' />
               <TextSkeleton className='my-1 rounded-full w-[3rem]' />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full w-[17rem]' />
               <TextSkeleton className='my-1 rounded-full w-[2rem]' />
            </li>
            <li className='flex items-center justify-between my-1'>
               <TextSkeleton className='my-1 rounded-full w-[14rem]' />
               <TextSkeleton className='my-1 rounded-full w-[2rem]' />
            </li>
         </ul>
      </BaseSkeleton>
   );
}
