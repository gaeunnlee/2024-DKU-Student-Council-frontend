import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONSTANTS, ROUTES } from 'constant';

interface NavItem {
   id: number;
   name: string;
   path: string;
   icon: JSX.Element;
}

const navItems: NavItem[] = [
   {
      id: 1,
      name: '메뉴',
      path: '/category',
      icon: (
         <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
         >
            <path
               d='M24.2754 24.7663C24.4224 25 24.7311 25.0703 24.9649 24.9232C25.1986 24.7761 25.2688 24.4674 25.1217 24.2337L24.2754 24.7663ZM24.2138 14.3264C23.2654 18.0734 19.459 20.342 15.7121 19.3936L15.4667 20.3631C19.7491 21.447 24.0993 18.8541 25.1832 14.5718L24.2138 14.3264ZM15.7121 19.3936C11.9651 18.4452 9.69639 14.6389 10.6448 10.8919L9.67536 10.6465C8.59144 14.9289 11.1843 19.2792 15.4667 20.3631L15.7121 19.3936ZM10.6448 10.8919C11.5932 7.14493 15.3996 4.87623 19.1465 5.82464L19.3919 4.85521C15.1095 3.77129 10.7593 6.36415 9.67536 10.6465L10.6448 10.8919ZM19.1465 5.82464C22.8935 6.77304 25.1622 10.5794 24.2138 14.3264L25.1832 14.5718C26.2671 10.2894 23.6743 5.93913 19.3919 4.85521L19.1465 5.82464ZM20.8452 19.3166L24.2754 24.7663L25.1217 24.2337L21.6915 18.7839L20.8452 19.3166Z'
               fill='white'
            ></path>
            <line x1='4.5' y1='8.5' x2='8.5' y2='8.5' stroke='white' strokeLinecap='round'></line>
            <line x1='4.5' y1='21.5' x2='12.5' y2='21.5' stroke='white' strokeLinecap='round'></line>
            <line x1='4.5' y1='15' x2='7.5' y2='15' stroke='white' strokeLinecap='round'></line>
         </svg>
      ),
   },
   {
      id: 2,
      name: '커뮤니티',
      path: '/snap',
      icon: (
         <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
         >
            <path
               d='M6 4H15H23H24C24.6667 4 26 4.4 26 6V18.0001V20.0001C26 21.6001 24.6667 22.0001 24 22.0001H22V26.0001L17 22.0001H6C4.4 22.0001 4 20.6668 4 20.0001V6.00001C4 4.40001 5.33333 4 6 4Z'
               stroke='white'
            ></path>
            <path d='M14 8L11 18' stroke='white' strokeLinecap='square'></path>
            <path d='M19 8L16 18' stroke='white' strokeLinecap='square'></path>
            <path d='M10 11H21' stroke='white' strokeLinecap='square'></path>
            <path d='M9 15H20' stroke='white' strokeLinecap='square'></path>
         </svg>
      ),
   },
   {
      id: 3,
      name: '홈',
      path: ROUTES.MAIN,
      icon: (
         <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
         >
            <path
               d='M4 15.8008L15 4.80078L26 15.8008M15 20.7422V25.0008H7V12.8008M23 12.8008V25.0008H17'
               stroke='white'
            ></path>
         </svg>
      ),
   },
   {
      id: 4,
      name: '대여물품',
      path: ROUTES.RENTAL.ROOT,
      icon: (
         <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
         >
            <path
               d='M15.3779 9.38123L13.6524 7.65578C11.5073 5.51066 8.02936 5.51065 5.88423 7.65578C3.73911 9.8009 3.73911 13.2788 5.88423 15.424L14.9992 24.539L18.5248 21.0134C18.6735 20.8647 18.8127 20.7102 18.9425 20.5505L23.0949 16.3982M16.396 7.56125C18.5447 5.46384 21.9869 5.4797 24.116 7.60884C26.2445 9.73732 26.261 13.178 24.1656 15.3268'
               stroke='white'
            ></path>
         </svg>
      ),
   },
   {
      id: 5,
      name: '마이',
      path: ROUTES.MYPAGE,
      icon: (
         <span className='rounded-full bg-slate-300 w-[22px] h-[22px] my-1 grid place-content-center border-white border-2'>
            <svg
               width='12'
               height='12'
               viewBox='0 0 12 12'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
               role='img'
            >
               <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.00258 6.35962C7.59317 6.35962 8.88259 5.07019 8.88259 3.47961C8.88259 1.88903 7.59317 0.599609 6.00258 0.599609C4.412 0.599609 3.12258 1.88903 3.12258 3.47961C3.12258 5.07019 4.412 6.35962 6.00258 6.35962ZM0.961914 9.60016C0.961914 10.5946 3.2184 11.4007 6.00191 11.4007C8.78543 11.4007 11.0419 10.5946 11.0419 9.60016C11.0419 8.60574 8.78543 7.79961 6.00191 7.79961C3.2184 7.79961 0.961914 8.60574 0.961914 9.60016Z'
                  fill='white'
               ></path>
            </svg>
         </span>
      ),
   },
];

export default function Nav() {
   return (
      // pwa인 경우: pb-[20px] h-[80px]
      <motion.nav
         className='w-full bg-blue-600 left-[50%] translate-x-[-50%] fixed flex justify-between px-6 items-center max-w-3xl'
         style={{ height: CONSTANTS.bottomNavSize }}
         initial={{ bottom: '-60px' }}
         animate={{ bottom: '0px' }}
         exit={{ bottom: '-60px' }}
         transition={{ duration: 0.3 }}
      >
         {navItems.map((el) => (
            <Link
               key={el.id}
               to={el.path}
               className='text-white text-[10px] font-normal flex flex-col justify-end items-center gap-1'
            >
               {el.icon}
               {el.name}
            </Link>
         ))}
      </motion.nav>
   );
}
