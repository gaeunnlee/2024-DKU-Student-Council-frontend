import { Button } from '@components/ui/button';
import { shadowStyle } from '@constants/shadow';
import { useDeleteUser } from '@hooks/api/auth/useDeleteUser';
import React from 'react';
import { BiSolidCalendarStar } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';
import { IoIosListBox } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import MyPageLayout from '@/components/layouts/MyPageLayout';
import { removeTokens } from '@/utils/token';

export default function MyPage() {
   const navigate = useNavigate();
   const { mutate } = useDeleteUser();

   const deleteAccount = () => {
      mutate();
   };

   const logout = () => {
      removeTokens();
   };

   return (
      <MyPageLayout>
         <nav className='flex justify-center sticky mt-[-35px]'>
            <ul
               className={`bg-white flex justify-between ${shadowStyle.default} rounded-[40px] w-11/12 px-10 pt-3 pb-2`}
            >
               {NavContent.map(({ id, name, icon }) => (
                  <li
                     key={id}
                     className='flex flex-col items-center text-4xl cursor-pointer'
                     onClick={() => {
                        id === 'edit' ? navigate('password') : navigate(id);
                     }}
                  >
                     {icon}
                     <p className='text-[0.6rem] leading-5'>{name}</p>
                  </li>
               ))}
            </ul>
         </nav>
         <div className='p-4 flex flex-col gap-3'>
            <Button size='default' variant='default' onClick={() => logout()}>
               로그아웃
            </Button>
            <Button size='default' onClick={() => deleteAccount()}>
               탈퇴하기
            </Button>
         </div>
      </MyPageLayout>
   );
}

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
