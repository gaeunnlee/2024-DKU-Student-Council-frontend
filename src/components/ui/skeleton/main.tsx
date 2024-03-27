import MainSectionLayout from '@components/layouts/MainSectionLayout';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function NoticeSkeleton() {
   return (
      <MainSectionLayout>
         <div className='flex items-center justify-between mb-3'>
            <Skeleton className='w-20 h-7' />
            <Skeleton className='w-9 h-5' />
         </div>
         <ul className='space-y-2'>
            <li>
               <Skeleton className='w-full h-5' />
            </li>
            <li>
               <Skeleton className='w-full h-5' />
            </li>
            <li>
               <Skeleton className='w-full h-5' />
            </li>
            <li>
               <Skeleton className='w-full h-5' />
            </li>
            <li>
               <Skeleton className='w-full h-5' />
            </li>
         </ul>
      </MainSectionLayout>
   );
}
