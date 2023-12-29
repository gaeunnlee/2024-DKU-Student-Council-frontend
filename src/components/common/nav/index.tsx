import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as WithDankookIcon } from '../../../assets/icons/with_dankook.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as PartnershipIcon } from '../../../assets/icons/partnership.svg';
import { ReactComponent as MyPageIcon } from '../../../assets/icons/mypage.svg';
import { motion } from 'framer-motion';
import { CONSTANTS, ROUTES } from 'constant';

interface NavItem {
   id: number;
   name: string;
   path: string;
   icon: ReactElement;
}

const navItems: NavItem[] = [
   {
      id: 1,
      name: 'Menu',
      path: '/category',
      icon: <MenuIcon />,
   },
   {
      id: 2,
      name: 'With_dankook',
      path: '/snap',
      icon: <WithDankookIcon />,
   },
   {
      id: 3,
      name: 'Home',
      path: ROUTES.MAIN,
      icon: <HomeIcon />,
   },
   {
      id: 4,
      name: '제휴사업',
      path: ROUTES.RENTAL.ROOT,
      icon: <PartnershipIcon />,
   },
   {
      id: 5,
      name: 'My page',
      path: ROUTES.MYPAGE,
      icon: <MyPageIcon />,
   },
];

export default function Nav() {
   return (
      // pwa인 경우: pb-[20px] h-[80px]
      <motion.nav
         className='w-[390px] bg-black left-[50%] translate-x-[-50%] fixed flex justify-between px-6 items-center max-w-3xl'
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
               className='text-white text-xs font-normal flex flex-col items-center gap-1'
            >
               {el.icon}
               {el.name}
            </Link>
         ))}
      </motion.nav>
   );
}
