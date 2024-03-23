import BoardLayout, { IBoardList } from '@components/layouts/BoardLayout';
import FloatingButton from '@components/ui/button/FloatingButton';
import { API_PATH } from '@constants/api';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import { isLoggedIn } from '@utils/token';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const getDaysBetween = (expiresAt: string) => {
   const startDate = new Date();
   const endDate = new Date(expiresAt);
   const result = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
   return result;
};

export const getPetitionStatus = (status: string) => {
   const statusEng = ['WAITING', 'ACTIVE', 'ANSWERED', 'EXPIRED'];
   const statusKor = ['대기', '진행중', '완료', '종료'];
   const resultIndex = statusEng.findIndex((keyword) => status === keyword);
   return statusKor[resultIndex];
};

export default function PetitionBoard() {
   const navigate = useNavigate();
   const { setLayout } = useLayout();

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.PETITION.HEAD,
         headingStyle: `${HEADING_STYLE.COUNCIL.HEAD} mb-[30px]`,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const Cell = ({ data }: { data: IBoardList }) => (
      <div className=' py-3 flex justify-between leading-9 px-6 gap-3 whitespace-nowrap'>
         <p>{getPetitionStatus(data.status!)}</p>
         <p className='text-ellipsis overflow-hidden'>{data.title}</p>
         <p>{getDaysBetween(data.expiresAt!) > 0 ? `D-${getDaysBetween(data.expiresAt!)}` : '만료'}</p>
      </div>
   );

   return (
      <>
         <BoardLayout api={API_PATH.PETITION.ROOT} setCell={(data: IBoardList) => <Cell data={data} />} />
         {isLoggedIn && (
            <FloatingButton
               event={() => {
                  navigate(ROUTES.PETITION.POST);
               }}
            >
               <p className='text-white'>Upload</p>
            </FloatingButton>
         )}
      </>
   );
}
