import { Gnb, GnbGoBack } from '@components/common/gnb';
import { GnhTitle } from '@components/common/gnh';
import { HeaderSection, ContentSection } from '@components/layouts';
import FloatingButton from '@components/ui/button/FloatingButton';
import CouncilSkeleton from '@components/ui/skeleton/council';
import { HEADING_TEXT } from '@constants/heading';
import { ROUTES } from '@constants/route';
import { isLoggedIn } from '@utils/token';
import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import { PetitionType } from '@/types/petition';

const PetitionList = lazy(() => import('@components/petition/index'));

export const getDaysBetween = (expiresAt: string) => {
   const startDate = new Date();
   const endDate = new Date(expiresAt);
   const result = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
   return result;
};

export const getPetitionStatus = (status: PetitionType) => {
   const statusEng: PetitionType[] = [
      PetitionType.WAITING,
      PetitionType.ACTIVE,
      PetitionType.ANSWERED,
      PetitionType.EXPIRED,
   ];
   const statusKor = ['대기', '진행중', '완료', '종료'];
   const resultIndex = statusEng.findIndex((keyword) => status == keyword);
   return statusKor[resultIndex];
};

export default function PetitionBoard() {
   const navigate = useNavigate();

   return (
      <React.Fragment>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         <HeaderSection className="pt-[45px] ml-[29px] pb-[53px]">
            <GnhTitle>{HEADING_TEXT.PETITION.HEAD}</GnhTitle>
         </HeaderSection>
         <ContentSection showNav={true}>
            <Suspense fallback={<CouncilSkeleton />}>
               <PetitionList />
            </Suspense>
         </ContentSection>
         {isLoggedIn && (
            <FloatingButton
               event={() => {
                  navigate(ROUTES.PETITION.POST);
               }}
            >
               <p className='text-white'>Upload</p>
            </FloatingButton>
         )}
      </React.Fragment>
   );
}
