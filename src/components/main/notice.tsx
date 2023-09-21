import React from 'react';
import { BaseSkeleton, TextSkeleton } from 'components/ui/skeleton';

export interface INotice {
   id: number;
   title: string;
}

/**
 * @description 메인 페이지의 공지사항 컴포넌트
 */
export default function Notice({ notices }: { notices?: INotice[] }) {
   return notices ? (
      <div className='px-4 py-5 m-4 rounded-xl bg-gray-100'>
         <h3 className='font-bold text-lg'>최신 공지사항</h3>
         <ul className='mt-3'>
            {notices?.map((item) => (
               <li key={item.id} className='flex items-center justify-between my-1'>
                  <span className='text-sm'>{item.title}</span>
               </li>
            ))}
         </ul>
      </div>
   ) : (
      <BaseSkeleton className='px-4 py-5 m-4 rounded-xl'>
         <h3 className='font-bold text-lg'>최신 공지사항</h3>
         <ul className='mt-4'>
            <TextSkeleton className='my-3 rounded-full w-[7rem]' />
            <TextSkeleton className='my-3 rounded-full w-[15rem]' />
            <TextSkeleton className='my-3 rounded-full w-[10rem]' />
            <TextSkeleton className='my-3 rounded-full w-[17rem]' />
            <TextSkeleton className='my-3 rounded-full w-[14rem]' />
         </ul>
      </BaseSkeleton>
   );
}
