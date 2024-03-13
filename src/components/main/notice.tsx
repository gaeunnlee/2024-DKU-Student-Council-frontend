import { BaseSkeleton, TextSkeleton } from '@components/ui/skeleton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface INotice {
   id: number;
   title: string;
}

export default function Notice({ notices }: { notices?: INotice[] }) {
   const navigate = useNavigate();
   const handleNoticeItem = (id: number) => {
      navigate(`/notice/${id}`);
   };

   const handleNotice = () => {
      navigate('/notice');
   };

   return notices ? (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>총학소식</h3>
            <button className='text-[13px]' onClick={handleNotice}>
               더보기
            </button>
         </div>
         <ul className='mt-3 flex flex-col gap-2'>
            {notices?.map((item) => (
               <li key={item.id} onClick={() => handleNoticeItem(item.id)} className='text-sm cursor-pointer'>
                  {item.title}
               </li>
            ))}
         </ul>
      </section>
   ) : (
      <BaseSkeleton className='px-4 py-5 m-4 rounded-xl'>
         <h3 className='font-bold text-lg'>총학소식</h3>
         <ul className='mt-3 flex flex-col gap-2'>
            <TextSkeleton className='my-3 rounded-full' width={7} />
            <TextSkeleton className='my-3 rounded-full' width={15} />
            <TextSkeleton className='my-3 rounded-full' width={10} />
            <TextSkeleton className='my-3 rounded-full' width={17} />
            <TextSkeleton className='my-3 rounded-full' width={14} />
         </ul>
      </BaseSkeleton>
   );
}
