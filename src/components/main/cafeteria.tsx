import React, { useState } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useApi } from 'hooks/useApi';
import { API_PATH } from 'constants/api';
import SvgIcon from 'components/common/icon/SvgIcon';

interface ICafeteria {
   mealData: string;
   breakfast: string;
   lunch: string;
   dinner: string;
   [key: string]: string;
}

const mealOptions = [
   { key: 'breakfast', icon: 'lunch', label: '아침' },
   { key: 'lunch', icon: 'lunch', label: '점심' },
   { key: 'dinner', icon: 'dinner', label: '저녁' },
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
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <h4 className='font-bold text-lg ml-4 mb-4'>오늘의 학식</h4>
         <div className='flex gap-2'>
            <ul className='flex flex-col gap-1'>
               {mealOptions.map((option) => (
                  <li key={option.key}>
                     <button
                        className={`${
                           selectedMeal === option.key ? 'bg-black text-white' : 'bg-white text-black'
                        } flex items-center gap-[2px] w-[70px] h-6 text-center text-sm px-3 rounded-xl bg-${
                           option.key
                        } shadow-md bg-no-repeat`}
                        onClick={() => setSelectedMeal(option.key)}
                     >
                        <SvgIcon
                           id={option.icon}
                           width={15}
                           height={15}
                           color={`${selectedMeal === option.key ? 'white' : 'black'}`}
                        />
                        {option.label}
                     </button>
                  </li>
               ))}
            </ul>
            <div className='w-[250px] px-4 py-5'>{handleMealData()}</div>
         </div>
      </section>
   );
}
