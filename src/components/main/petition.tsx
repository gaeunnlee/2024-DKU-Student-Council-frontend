import MainSectionLayout from '@components/layouts/MainSectionLayout';
import { Button } from '@components/ui/button';
import { PetitionType } from '@hooks/api/main/useGetMain';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Petition({ petitions }: { petitions?: PetitionType[] }) {
   const navigate = useNavigate();

   const handlePetitionItem = (id: number) => {
      navigate(`/petition/${id}`);
   };

   const handlePetition = () => {
      navigate('/petition');
   };

   return (
      <MainSectionLayout>
         <div className='flex items-center justify-between'>
            <h3 className='font-bold text-lg'>청원게시판</h3>
            <Button variant='ghost' className='text-[13px]' onClick={handlePetition}>
               더보기
            </Button>
         </div>
         <ul className='mt-3 flex flex-col gap-2'>
            {petitions?.map((item) => (
               <li
                  key={item.id}
                  className='flex items-center justify-between'
                  onClick={() => handlePetitionItem(item.id)}
               >
                  <span className='text-sm cursor-pointer'>{item.title}</span>
                  <span className='text-xs text-gray-500'>{item.d_day < 0 ? `D${item.d_day}` : '만료'}</span>
               </li>
            ))}
         </ul>
      </MainSectionLayout>
   );
}
