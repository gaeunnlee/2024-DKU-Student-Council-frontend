import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SvgIcon from '../icon/SvgIcon';
import { CONSTANTS } from 'constant';

interface NavItem {
   id: number;
   name: string;
   path: string;
   icon: React.ReactElement;
}

const navItems: NavItem[] = [
   {
      id: 1,
      name: 'Menu',
      path: '/menu',
      icon: <SvgIcon id='menu' width={18.58} height={14.35} />,
   },
   {
      id: 2,
      name: 'With_dankook',
      path: '/snap',
      icon: <SvgIcon id='with_dankook' width={19.53} height={18.77} />,
   },
   {
      id: 3,
      name: 'Home',
      path: '/home',
      icon: <SvgIcon id='home' width={19.53} height={19.6} />,
   },
   {
      id: 4,
      name: '제휴사업',
      path: '/partnership',
      icon: <SvgIcon id='partnership' width={17.54} height={19.6} />,
   },
   {
      id: 5,
      name: 'My page',
      path: '/mypage',
      icon: <SvgIcon id='mypage' width={20.06} height={20.13} />,
   },
];

export default function Nav() {
   return (
      <>
         <motion.nav
            className='w-[390px] bg-black left-[50%] translate-x-[-50%] fixed flex justify-between p-6 items-center max-w-3xl'
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
      </>
   );
}
