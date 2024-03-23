import { API_PATH } from '@constants/api';
import { useApi } from '@hooks/useApi';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

import { IMyInfo } from '@/types/mypage/edit';

export default function MyPageLayout({
   children,
   getStudentId,
}: {
   children: React.ReactNode;
   getStudentId?: (id: string) => void;
}) {
   const { setLayout } = useLayout();
   const [myInfo, setMyInfo] = React.useState<IMyInfo | null>(null);
   const { get } = useApi();

   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
      getStudentId && getStudentId(data.studentId);
   };
   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
         margin: '',
         rounded: false,
      });
   });

   return (
      <div className='h-[calc(100vh-110px)]'>
         <div className='flex justify-between px-8 pt-4 pb-14 bg-black text-white'>
            <div className='flex flex-col justify-evenly w-7/12'>
               <strong className='text-2xl'>{myInfo?.nickname}</strong>
               <p>
                  {myInfo?.studentId} <br />
                  {myInfo?.department} {myInfo?.major}
               </p>
            </div>
            <ProfileImage src={myInfo?.profileImage} />
         </div>
         {children}
      </div>
   );
}

export const ProfileImage = ({ src }: { src?: string }) => (
   <div
      style={{
         backgroundImage: `url('${src}')`,
      }}
      className='rounded-full bg-slate-300 w-[7rem] h-[7rem] bg-cover'
   ></div>
);
