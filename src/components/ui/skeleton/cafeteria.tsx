import MainSectionLayout from '@components/layouts/MainSectionLayout';
import { Skeleton } from '@components/ui/skeleton/base';
import React from 'react';

export default function CafeteriaSkeleton() {
   return (
      <MainSectionLayout>
         <Skeleton className="w-20 h-7 mb-3" />
         <div className="flex justify-between">
            <ul className="flex flex-col gap-1">
               <li><Skeleton className="w-[70px] h-6"/></li>
               <li><Skeleton className="w-[70px] h-6"/></li>
               <li><Skeleton className="w-[70px] h-6"/></li>
            </ul>
            <Skeleton className="w-[216px] h-36"/>
         </div>
      </MainSectionLayout>
   );
}