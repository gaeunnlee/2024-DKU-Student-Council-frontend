import React, { useState } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useApi } from 'hooks/useApi';
import { API_PATH } from 'constants/api';

interface ICafeteria {
   mealData: string;
   breakfast: string;
   lunch: string;
   dinner: string;
   [key: string]: string;
}

const mealOptions = [
   { key: 'breakfast', label: '아침' },
   { key: 'lunch', label: '점심' },
   { key: 'dinner', label: '저녁' },
];

export default function Cafeteria() {
   const { get } = useApi();
   const [cafeteria, setCafeteria] = useState<ICafeteria | null>(null);
   const [selectedMeal, setSelectedMeal] = useState('breakfast');

   const fetchMeal = async () => {
      const data = await get<ICafeteria>(API_PATH.MAIN.CAFETERIA, {
         authenticate: true,
         contentType: 'application/json',
         log: true,
      });
      setCafeteria(data);
   };

   useEffectOnce(() => {
      fetchMeal();
   });

   const handleMealData = (): JSX.Element | null => {
      return cafeteria ? <p>{cafeteria[selectedMeal]}</p> : null;
   };

   return (
      <section className='px-4 py-5 m-4'>
         <h4 className='font-bold text-lg ml-4 mb-4'>오늘의 학식</h4>
         <div className='flex gap-2'>
            <ul className='flex flex-col gap-1'>
               {mealOptions.map((option) => (
                  <li key={option.key}>
                     <button
                        className={`${
                           selectedMeal === option.key ? 'bg-black text-white' : 'bg-white text-black'
                        } w-[70px] text-center text-sm p-1 rounded-xl bg-${
                           option.key
                        } shadow-md bg-no-repeat`}
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
   );
}
