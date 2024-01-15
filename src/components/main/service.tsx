import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constant';
import SvgIcon from 'components/common/icon/SvgIcon';

interface ServItem {
   id: number;
   name: string;
   path: string;
   icon?: ReactElement;
}

const servItems: ServItem[] = [
   {
      id: 1,
      name: '단혼밥',
      path: '/',
      icon: <SvgIcon id='dan_dining' width={60} height={27} />,
   },
   {
      id: 2,
      name: 'BEAR 이츠',
      path: '/',
      icon: <SvgIcon id='dan_eats' width={60} height={27} />,
   },

   {
      id: 3,
      name: '단국 거래',
      path: '/',
      icon: <SvgIcon id='dan_transaction' width={60} height={27} />,
   },
   {
      id: 4,
      name: '구해줘 룸메',
      path: '/',
      icon: <SvgIcon id='dan_roommate' width={60} height={27} />,
   },
];

export default function Service() {
   const navigate = useNavigate();

   return (
      <section className='px-4 py-5 m-4'>
         <h3 className='font-bold text-lg ml-4 mb-4'>With-dankook</h3>
         <ul className='grid grid-cols-2 gap-2'>
            {servItems.map((el) => (
               <li
                  key={el.id}
                  className='w-[160px] h-[122px] rounded-lg pl-4 pt-2
                     bg-gradient-to-tl from-black to-[#4177D7]
                     text-white text-lg font-bold cursor-pointer'
                  style={{
                     backgroundImage: `url(${el.icon})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                  }}
                  onClick={() => navigate(ROUTES.LOGIN)}
               >
                  {el.name}
               </li>
            ))}
         </ul>
      </section>
   );
}
