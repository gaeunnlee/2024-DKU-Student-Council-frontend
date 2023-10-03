import React from 'react';
import axios from 'axios';
import Board from 'components/common/board';
import { API_PATH, ROUTES } from 'constant';
import { useAlert } from 'hooks/useAlert';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { ReactComponent as ChevronRight } from 'assets/images/chevron_right.svg';
import SpeedDial from 'components/ui/speed-dial';
import { Link } from 'react-router-dom';
import { useLayout } from 'hooks/useLayout';
import { IPaging } from 'api/axios-interface';

interface Content {
   id: number;
   name: string;
   remaining: number;
}

export default function Rental() {
   const [rental, setRental] = React.useState<IPaging<Content> | null>(null);
   const { alert } = useAlert();
   const { setTitle } = useLayout();

   const fetchRental = async () => {
      try {
         const { data } = await axios.get<IPaging<Content>>(API_PATH.POST.RENTAL.ITEM + '?page=0&size=20');
         setRental(data);
      } catch (error) {
         alert(error);
      }
   };

   useEffectOnce(() => {
      fetchRental();
      setTitle('대여물품');
   });

   return (
      <>
         <Board>
            {rental?.content.map((item) => (
               <Board.Cell key={item.id}>
                  <Link
                     to={ROUTES.RENTAL.ITEM.replace(':id', item.id.toString())}
                     className='flex justify-between items-center'
                  >
                     <h6>{item.name}</h6>
                     <span className='text-sm text-gray-400 flex items-center'>
                        잔여: <div>{item.remaining}</div> <ChevronRight className='opacity-30' />
                     </span>
                  </Link>
               </Board.Cell>
            ))}
         </Board>
         <SpeedDial className='bg-blue-500 text-white text-lg py-2 px-4'>대여하기</SpeedDial>
      </>
   );
}
