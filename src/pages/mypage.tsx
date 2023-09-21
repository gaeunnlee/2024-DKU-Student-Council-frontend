import React from 'react';
import axios from 'axios';
import { API_PATH } from 'constant';
import { useAlert } from 'hooks/useAlert';
import { useEffectOnce } from 'hooks/useEffectOnce';
import Box from 'components/ui/box';
import Button from 'components/ui/button';

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
   const { alert } = useAlert();

   const [myInfo, setMyInfo] = React.useState<IMyInfo | null>(null);

   const fetchMyInfo = async () => {
      try {
         const { data } = await axios.get<IMyInfo>(API_PATH.USER.ME);
         setMyInfo(data);
      } catch (error) {
         alert(error);
      }
   };

   useEffectOnce(() => {
      fetchMyInfo();
   });

   return (
      <div className='p-4 flex flex-col'>
         <div className='flex justify-between items-center'>
            <label className='text-xs'>
               닉네임
               <h4 className='text-2xl font-medium'>{myInfo?.nickname}</h4>
            </label>
            <Box>
               <span>{myInfo?.admin ? '관리자' : '재학생'}</span>
            </Box>
         </div>
         <Box className='mt-4'>
            <label className='text-xs'>학번</label>
            <h4 className='text-2xl font-medium'>{myInfo?.studentId}</h4>

            <label className='text-xs'>이름</label>
            <h4 className='text-2xl font-medium'>{myInfo?.username}</h4>

            <label className='text-xs'>학과</label>
            <h4 className='text-2xl font-medium'>{myInfo?.department}</h4>

            <label className='text-xs'>전공</label>
            <h4 className='text-2xl font-medium'>{myInfo?.major}</h4>

            <label className='text-xs'>학번</label>
            <h4 className='text-2xl font-medium'>{myInfo?.yearOfAdmission}</h4>

            <label className='text-xs'>전화번호</label>
            <h4 className='text-2xl font-medium'>{myInfo?.phoneNumber}</h4>
         </Box>
         <Box className='mt-4'>
            <label className='text-xs'>작성한 게시글</label>
            <h4 className='text-2xl font-medium'>{myInfo?.writePostCount}</h4>

            <label className='text-xs'>댓글 단 게시글</label>
            <h4 className='text-2xl font-medium'>{myInfo?.commentedPostCount}</h4>

            <label className='text-xs'>좋아요 누른 게시글</label>
            <h4 className='text-2xl font-medium'>{myInfo?.likedPostCount}</h4>
         </Box>
         <Box className='mt-4 flex flex-col'>
            <Button>로그아웃</Button>
            <Button variant='red'>탈퇴하기</Button>
         </Box>
      </div>
   );
}
