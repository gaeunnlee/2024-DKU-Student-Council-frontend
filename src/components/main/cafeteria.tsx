import React, { useState } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useApi } from 'hooks/useApi';
import { API_PATH } from 'constant';

interface ICafeteria {
   mealData: string;
   breakfast: string;
   lunch: string;
   dinner: string;
}

const mealOptions = [
   { key: 'breakfast', label: '아침' },
   { key: 'lunch', label: '점심' },
   { key: 'dinner', label: '저녁' },
];

export default function Cafeteria() {
   const { get } = useApi();
   const [cafeteria, setCafeteria] = useState<ICafeteria>();
   const [selectedMeal, setSelectedMeal] = useState('breakfast');

   const handleMealData = () => {
      switch (selectedMeal) {
         case 'breakfast':
            return <p>{cafeteria?.breakfast}</p>;
         case 'lunch':
            return <p>{cafeteria?.lunch}</p>;
         case 'dinner':
            return <p>{cafeteria?.dinner}</p>;
         default:
            return <></>;
      }
   };

   useEffectOnce(() => {
      fetchMeal();
   });

   const fetchMeal = async () => {
      const data = await get<ICafeteria>(API_PATH.MAIN.CAFETERIA, {
         authenticate: true,
         contentType: 'application/json',
         log: true,
      });
      setCafeteria(data);
   };

   return (
      cafeteria && (
         <section className='px-4 py-5 m-4'>
            <h4 className='font-bold text-lg ml-4 mb-4'>오늘의 학식</h4>
            <div className='flex gap-2'>
               <ul className='flex flex-col gap-1'>
                  {mealOptions.map((option) => (
                     <li key={option.key}>
                        <button
                           className={`${
                              selectedMeal === option.key ? 'bg-black text-white' : 'bg-white text-black'
                           } w-[70px] text-center text-sm py-1 rounded-xl bg-breakfast shadow-md bg-no-repeat`}
                           onClick={() => setSelectedMeal(option.key)}
                        >
                           {option.label}
                        </button>
                     </li>
                  ))}
               </ul>
               <div className='w-[250px] px-4 py-5 text-sm rounded-xl bg-white shadow-md'>
                  {handleMealData()}
               </div>
            </div>
         </section>
      )
   );
}
