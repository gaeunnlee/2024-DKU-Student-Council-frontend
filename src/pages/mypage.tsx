import React from 'react';
import { API_PATH } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import Box from 'components/ui/box';
import Button from 'components/ui/button';
import Text from 'components/ui/text';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';
import { useAuth } from 'hooks/useAuth';

interface IMyInfo {
   studentId: string;
   username: string;
   nickname: string;
   yearOfAdmission: string;
   major: string;
   department: string;
   phoneNumber: string;
   writePostCount: number;
   commentedPostCount: number;
   likedPostCount: number;
   admin: boolean;
}

export default function MyPage() {
   const { setLayout } = useLayout();
   const { logout } = useAuth();
   const [myInfo, setMyInfo] = React.useState<IMyInfo | null>(null);
   const { get } = useApi();

   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
   };

   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: '마이페이지',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         subHeadingStyle: '',
         margin: '',
         rounded: true,
      });
   });

   return (
      <div className='p-4 flex flex-col'>
         <div className='flex justify-between items-center'>
            <label className='text-xs'>
               닉네임
               <Text className='text-2xl font-medium' length={5} height={1.5}>
                  {myInfo?.nickname}
               </Text>
            </label>
            <Box>
               <span>{myInfo?.admin ? '관리자' : '재학생'}</span>
            </Box>
         </div>
         <Box className='mt-4'>
            <label className='text-xs'>학번</label>
            <Text className='text-2xl font-medium' length={7} height={1.5}>
               {myInfo?.studentId}
            </Text>
            <label className='text-xs'>이름</label>
            <Text className='text-2xl font-medium' length={5} height={1.5}>
               {myInfo?.username}
            </Text>
            <label className='text-xs'>학과</label>
            <Text className='text-2xl font-medium' length={8} height={1.5}>
               {myInfo?.department}
            </Text>
            <label>전공</label>
            <Text className='text-2xl font-medium' length={8} height={1.5}>
               {myInfo?.major}
            </Text>
            <label>학번</label>
            <Text className='text-2xl font-medium' length={4} height={1.5}>
               {myInfo?.yearOfAdmission}
            </Text>
            <label className='text-xs'>전화번호</label>
            <Text className='text-2xl font-medium' length={10} height={1.5}>
               {myInfo?.phoneNumber}
            </Text>
         </Box>
         <Box className='mt-4'>
            <label className='text-xs'>작성한 게시글</label>
            <Text className='text-2xl font-medium' length={3} height={1.5}>
               {myInfo?.writePostCount}
            </Text>

            <label className='text-xs'>댓글 단 게시글</label>
            <Text className='text-2xl font-medium' length={4} height={1.5}>
               {myInfo?.commentedPostCount}
            </Text>

            <label className='text-xs'>좋아요 누른 게시글</label>
            <Text className='text-2xl font-medium' length={2} height={1.5}>
               {myInfo?.likedPostCount}
            </Text>
         </Box>
         <Box className='mt-4 flex flex-col'>
            <Button variant='red' onClick={() => logout()}>
               로그아웃
            </Button>
            <Button>탈퇴하기</Button>
         </Box>
      </div>
   );
}
