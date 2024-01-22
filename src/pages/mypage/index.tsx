import React, { useEffect } from 'react';
import { API_PATH } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import Button from 'components/ui/button';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';
import { useAuth } from 'hooks/useAuth';
import { FaUser } from 'react-icons/fa6';
import { IoIosListBox } from 'react-icons/io';
import { BiSolidCalendarStar } from 'react-icons/bi';
import { shadowStyle } from 'constants/style';
import { useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate();

   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
   };

   useEffectOnce(() => {
      fetchMyInfo();
   });

   useEffect(() => {
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         subHeadingStyle: '',
         margin: '',
         rounded: false,
      });
   }, []);

   const NavContent = [
      {
         id: 'edit',
         name: '내 정보 수정',
         icon: <FaUser />,
      },
      {
         id: 'post',
         name: '내가 쓴 글',
         icon: <IoIosListBox />,
      },
      {
         id: 'event',
         name: '이벤트',
         icon: <BiSolidCalendarStar />,
      },
   ];

   return (
      <>
         {/* 기본 정보 */}
         <div className='flex justify-between px-8 pt-4 pb-14 bg-black text-white'>
            <div className='flex flex-col justify-evenly'>
               <strong className='text-2xl'>{myInfo?.nickname}</strong>
               <p>
                  {myInfo?.studentId} <br />
                  {myInfo?.department} {myInfo?.major}
               </p>
            </div>
            <div className='rounded-full bg-slate-300 w-[7rem] aspect-square overflow-hidden'>
               <img
                  src={''} // API 없음
               />
            </div>
         </div>
         {/* 네비게이션 */}
         <nav className='flex justify-center sticky mt-[-35px]'>
            <ul
               className={`bg-white flex justify-between ${shadowStyle.default} rounded-[40px] w-11/12 px-10 pt-3 pb-2`}
            >
               {NavContent.map(({ id, name, icon }) => (
                  <li
                     key={id}
                     className='flex flex-col items-center text-4xl cursor-pointer'
                     onClick={() => {
                        navigate(id);
                     }}
                  >
                     {icon}
                     <p className='text-[0.6rem] leading-5'>{name}</p>
                  </li>
               ))}
            </ul>
         </nav>
         <div className=''></div>
         <div className='p-4 flex flex-col'>
            <Button variant='red' onClick={() => logout()}>
               로그아웃
            </Button>
            <Button>탈퇴하기</Button>
         </div>
      </>
   );
}
