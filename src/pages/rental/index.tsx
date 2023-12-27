import React from 'react';
import Board from 'components/common/board';
import { API_PATH, PAGE_SIZE, QUERY_STRING, ROUTES } from 'constant';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { ReactComponent as ChevronRight } from 'assets/images/chevron_right.svg';
import SpeedDial from 'components/ui/speed-dial';
import { Link } from 'react-router-dom';
import { useLayout } from 'hooks/useLayout';
import { IPaging } from 'api/axios-interface';
import { useApi } from 'hooks/useApi';

interface Content {
   id: number;
   name: string;
   remaining: number;
}

export default function Rental() {
   const [rental, setRental] = React.useState<IPaging<Content> | null>(null);
   const { setLayout } = useLayout();
   const { get } = useApi();

   const fetchRental = async () => {
      const data = await get<IPaging<Content>>(
         API_PATH.POST.RENTAL.ITEM + `?${QUERY_STRING.PAGE}=0&${QUERY_STRING.SIZE}=${PAGE_SIZE.RENTAL}`,
      );
      setRental(data);
   };

   useEffectOnce(() => {
      fetchRental();
      setLayout({
         title: '대여물품',
         backButton: true,
         isMain: false,
         fullscreen: false,
      });
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
