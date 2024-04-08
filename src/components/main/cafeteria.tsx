import SvgIcon from '@components/common/icon/SvgIcon';
import { MealType, useGetCafeteria } from '@hooks/api/main/useGetCafeteria';
import React from 'react';

export default function Cafeteria() {
   const [selectedMeal, setSelectedMeal] = React.useState<MealType>('breakfast');

   const emptyCafeteria = '학식 데이터가 존재하지 않습니다.';

   const { data: cafeteria } = useGetCafeteria();
   const cafeteriaInfo = cafeteria ? cafeteria[selectedMeal] : emptyCafeteria;

   const mealButton =
      'flex items-center gap-[2px] w-[70px] h-6 text-center text-sm px-3 rounded-xl shadow-md bg-no-repeat';

   const MEAL_OPTIONS = [
      { key: 'breakfast', icon: 'lunch', label: '아침' },
      { key: 'lunch', icon: 'lunch', label: '점심' },
      { key: 'dinner', icon: 'dinner', label: '저녁' },
   ];

   return (
      <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>
         <h4 className='font-bold text-lg mb-4'>오늘의 학식</h4>
         <div className='flex gap-2'>
            <ul className='flex flex-col gap-1'>
               {MEAL_OPTIONS.map((option) => (
                  <li key={option.key}>
                     <button
                        className={`${
                           selectedMeal === option.key ? 'bg-black text-white' : 'bg-white text-black'
                        } ${mealButton}`}
                        onClick={() => setSelectedMeal(option.key as MealType)}
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
            <div className='w-[250px] px-4 text-sm'>{cafeteriaInfo}</div>
         </div>
      </section>
   );
}
