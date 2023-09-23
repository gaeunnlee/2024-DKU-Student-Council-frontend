import React from 'react';
import axios from 'axios';
import Board from 'components/common/board';
import { API_PATH, ROUTES } from 'constant';
import { useAlert } from 'hooks/useAlert';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { ReactComponent as ChevronRight } from 'assets/images/chevron_right.svg';
import { BaseSkeleton, TextSkeleton } from 'components/ui/skeleton';
import SpeedDial from 'components/ui/speed-dial';
import { Link } from 'react-router-dom';
import { useLayout } from 'hooks/useLayout';

interface IRental {
   content: Content[];
   hasNext: boolean;
   totalPages: number;
   totalElements: number;
   page: number;
   size: number;
   first: boolean;
   last: boolean;
}

interface Content {
   id: number;
   name: string;
   remaining: number;
}

export default function Rental() {
   const [rental, setRental] = React.useState<IRental | null>(null);
   const { alert } = useAlert();
   const { setTitle } = useLayout();

   const fetchRental = async () => {
      try {
         const { data } = await axios.get<IRental>(API_PATH.RENTAL.ITEM + '?page=0&size=20');
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
         <Board
            skeleton={
               <BaseSkeleton className='p-4 my-[1px] rounded-lg h-full flex justify-between items-center'>
                  <TextSkeleton className='rounded-full' width={4} height={1} />
                  <span className='text-sm text-gray-400 flex items-center'>
                     잔여: <TextSkeleton width={1} className='rounded-full' />
                     <ChevronRight className='opacity-30' />
                  </span>
               </BaseSkeleton>
            }
            skeletonCount={10}
         >
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
         <SpeedDial>
            <button className='bg-blue-500 rounded-full px-4 py-2 text-white text-lg shadow-xl'>
               대여하기
            </button>
         </SpeedDial>
      </>
   );
}
