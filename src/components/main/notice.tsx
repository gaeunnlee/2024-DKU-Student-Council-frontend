import { Button } from '@components/ui/button';
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

   return (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>총학소식</h3>
            <Button variant='ghost' className='text-[13px]' onClick={handleNotice}>
               더보기
            </Button>
         </div>
         <ul className='mt-3 flex flex-col gap-2'>
            {notices?.map((item) => (
               <li key={item.id} onClick={() => handleNoticeItem(item.id)} className='text-sm cursor-pointer'>
                  {item.title}
               </li>
            ))}
         </ul>
      </section>
   );
}
