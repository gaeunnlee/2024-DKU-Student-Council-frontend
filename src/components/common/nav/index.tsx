import SvgIcon from '@components/common/icon/SvgIcon';
import { bottomNavSize } from '@constants/nav';
import { ROUTES } from '@constants/route';
import { menuStore } from '@stores/menu-store';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
   id: number;
   name: string;
   path?: string;
   icon: React.ReactElement;
}

const NAV_ITEMS: NavItem[] = [
   {
      id: 1,
      name: 'Menu',
      icon: <SvgIcon id='menu' width={18.58} height={14.35} />,
   },
   {
      id: 2,
      name: 'Home',
      path: ROUTES.MAIN,
      icon: <SvgIcon id='home' width={19.53} height={19.6} />,
   },
   {
      id: 3,
      name: '제휴사업',
      path: ROUTES.BUSINESS.CATEGORY(':category'),
      icon: <SvgIcon id='partnership' width={17.54} height={19.6} />,
   },
   {
      id: 4,
      name: 'My page',
      path: ROUTES.MYPAGE.INDEX,
      icon: <SvgIcon id='mypage' width={20.06} height={20.13} />,
   },
];

export default function Nav() {
   const { setMenuOpen } = menuStore();
   const handleOpenMenu = () => {
      setMenuOpen(true);
   };
   const navigate = useNavigate();

   const handleNavigate = (el: NavItem) => {
      if (el.name === '제휴사업') {
         navigate(ROUTES.BUSINESS.CATEGORY('food'));
      } else {
         navigate(el.path as string);
      }
   };

   return (
      <React.Fragment>
         <motion.nav
            className='w-[390px] bg-black left-[50%] translate-x-[-50%] fixed flex justify-between p-6 items-center max-w-3xl'
            style={{ height: bottomNavSize }}
            initial={{ bottom: '-60px' }}
            animate={{ bottom: '0px' }}
            exit={{ bottom: '-60px' }}
            transition={{ duration: 0.3 }}
         >
            {NAV_ITEMS.map((el) =>
               el.path ? (
                  <div
                     key={el.id}
                     onClick={() => handleNavigate(el)}
                     className='text-white text-[10px] font-normal flex flex-col justify-end items-center gap-1 cursor-pointer'
                  >
                     {el.icon}
                     {el.name}
                  </div>
               ) : (
                  <div
                     key={el.id}
                     onClick={handleOpenMenu}
                     className='text-white text-[10px] font-normal flex flex-col justify-end items-center gap-1 cursor-pointer'
                  >
                     {el.icon}
                     {el.name}
                  </div>
               ),
            )}
         </motion.nav>
      </React.Fragment>
   );
}
