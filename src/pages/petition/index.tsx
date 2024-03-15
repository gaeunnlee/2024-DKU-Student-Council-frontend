import FloatingButton from 'components/ui/button/FloatingButton';
import Text from 'components/ui/text';
import Title from 'components/ui/text/board';
import { API_PATH } from 'constants/api';
import { ROUTES } from 'constants/route';
import BoardLayout, { IBoardList } from 'layouts/BoardLayout';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useLayout } from 'hooks/useLayout';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { HEADING_TEXT, HEADING_STYLE } from 'constants/heading';

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
         <Text length={4}>{getPetitionStatus(data.status!)}</Text>
         <Title content={data.title} className='text-ellipsis overflow-hidden' />
         <Text length={4}>
            {getDaysBetween(data.expiresAt!) > 0 ? `D-${getDaysBetween(data.expiresAt!)}` : '만료'}
         </Text>
      </div>
   );

   return (
      <>
         <BoardLayout
            api={API_PATH.POST.PETITION.ROOT}
            setCell={(data: IBoardList) => <Cell data={data} />}
         />
         <FloatingButton
            event={() => {
               navigate(ROUTES.PETITION.POST);
            }}
         >
            <p className='text-white'>Upload</p>
         </FloatingButton>
      </>
   );
}
