import MainSectionLayout from '@components/layouts/MainSectionLayout';
import { Button } from '@components/ui/button';
import { ROUTES } from '@constants/route';
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
      navigate(ROUTES.NOTICE.ROOT);
   };

   return (
      <MainSectionLayout>
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
      </MainSectionLayout>
   );
}
