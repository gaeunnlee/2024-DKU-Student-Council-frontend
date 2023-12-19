import React, { useState } from 'react';
import { ICafeteria } from 'pages';

export default function Cafeteria({ cafeteria }: { cafeteria?: ICafeteria }) {
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
            return null;
      }
   };

   return (
      cafeteria && (
         <section className='px-4 py-5 m-4'>
            <h4 className='font-bold text-lg ml-4 mb-4'>오늘의 학식</h4>
            <div className='flex gap-2'>
               <ul className='flex flex-col gap-1'>
                  <li>
                     <button
                        className={`${
                           selectedMeal === 'breakfast' ? 'bg-black text-white' : 'bg-white text-black'
                        }
                      w-[70px] text-center text-sm py-1 rounded-xl bg-breakfast shadow-md bg-no-repeat`}
                        onClick={() => setSelectedMeal('breakfast')}
                     >
                        아침
                     </button>
                  </li>
                  <li>
                     <button
                        className={`${
                           selectedMeal === 'lunch' ? 'bg-black text-white' : 'bg-white text-black'
                        }
                      w-[70px] text-center text-sm py-1 rounded-xl bg-breakfast shadow-md bg-no-repeat`}
                        onClick={() => setSelectedMeal('lunch')}
                     >
                        점심
                     </button>
                  </li>
                  <li>
                     <button
                        className={`${
                           selectedMeal === 'dinner' ? 'bg-black text-white' : 'bg-white text-black'
                        }
                      w-[70px] text-center py-1 text-sm rounded-xl bg-breakfast shadow-md bg-no-repeat`}
                        onClick={() => setSelectedMeal('dinner')}
                     >
                        저녁
                     </button>
                  </li>
               </ul>
               <div className='w-[250px] px-4 py-5 text-sm rounded-xl bg-white shadow-md'>
                  {handleMealData()}
               </div>
            </div>
         </section>
      )
   );
}
