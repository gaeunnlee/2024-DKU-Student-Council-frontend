import React, { useState } from 'react';
import { useGetCafeteria } from 'hooks/query/main/query';
import SvgIcon from 'components/common/icon/SvgIcon';

export default function Cafeteria() {
   const [selectedMeal, setSelectedMeal] = useState('breakfast');

   const emptyCafeteria = '학식 데이터가 존재하지 않습니다.';

   const { data: cafeteria } = useGetCafeteria();
   const handleMealData = () => {
      return <p className='whitespace-pre-line'>{cafeteria[selectedMeal] ?? emptyCafeteria}</p>;
   };

   const mealButton =
      'flex items-center gap-[2px] w-[70px] h-6 text-center text-sm px-3 rounded-xl shadow-md bg-no-repeat';

   const mealOptions = [
      { key: 'breakfast', icon: 'lunch', label: '아침' },
      { key: 'lunch', icon: 'lunch', label: '점심' },
      { key: 'dinner', icon: 'dinner', label: '저녁' },
   ];

   return (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <h4 className='font-bold text-lg mb-4'>오늘의 학식</h4>
         <div className='flex gap-2'>
            <ul className='flex flex-col gap-1'>
               {mealOptions.map((option) => (
                  <li key={option.key}>
                     <button
                        className={`${
                           selectedMeal === option.key ? 'bg-black text-white' : 'bg-white text-black'
                        } ${mealButton}`}
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
            <div className='w-[250px] px-4 text-sm'>{handleMealData()}</div>
         </div>
      </section>
   );
}
