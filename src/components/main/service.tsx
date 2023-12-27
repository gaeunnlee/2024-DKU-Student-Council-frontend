import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constant';

export default function Service() {
   /** 임의로 로그인 경로 추가 */
   const navigate = useNavigate();
   return (
      <section className='px-4 py-5 m-4'>
         <h3 className='font-bold text-lg ml-4 mb-4'>With-dankook</h3>
         <ul className='grid grid-cols-2 gap-2'>
            <li
               className='w-[160px] h-[122px] rounded-lg pl-4 pt-2
            bg-gradient-to-tl from-black to-blue-700
             text-white text-lg font-bold cursor-pointer'
               onClick={() => navigate(ROUTES.LOGIN)}
            >
               단혼밥
            </li>
            <li
               className='w-[160px] h-[122px] rounded-lg pl-4 pt-2
            bg-gradient-to-tl from-black to-blue-700
            text-white text-lg font-bold cursor-pointer'
               onClick={() => navigate(ROUTES.LOGIN)}
            >
               BEAR 이츠
            </li>
            <li
               className='w-[160px] h-[122px] rounded-lg pl-4 pt-2
            bg-gradient-to-tl from-black to-blue-700
            text-white text-lg font-bold cursor-pointer'
               onClick={() => navigate(ROUTES.LOGIN)}
            >
               단국 거래
            </li>
            <li
               className='w-[160px] h-[122px] rounded-lg pl-4 pt-2
            bg-gradient-to-tl from-black to-blue-700
            text-white text-lg font-bold cursor-pointer'
               onClick={() => navigate(ROUTES.LOGIN)}
            >
               구해줘 룸메
            </li>
         </ul>
      </section>
   );
}
