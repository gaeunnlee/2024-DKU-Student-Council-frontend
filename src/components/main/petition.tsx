import { IPetition } from '@api/main/types/main';
import { BaseSkeleton, TextSkeleton } from '@components/ui/skeleton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Petition({ petitions }: { petitions?: IPetition[] }) {
   const navigate = useNavigate();

   const handlePetitionItem = (id: number) => {
      navigate(`/petition/${id}`);
   };

   const handlePetition = () => {
      navigate('/petition');
   };

   return petitions ? (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>청원게시판</h3>
            <button className='text-[13px]' onClick={handlePetition}>
               더보기
            </button>
         </div>
         <ul className='mt-3 flex flex-col gap-2'>
            {petitions?.map((item) => (
               <li
                  key={item.id}
                  className='flex items-center justify-between'
                  onClick={() => handlePetitionItem(item.id)}
               >
                  <span className='text-sm cursor-pointer'>{item.title}</span>
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
