import Gnb from '@components/common/gnb';
import Gnh from '@components/common/gnh';
import Nav from '@components/common/nav';
import Menu from '@components/main/menu';
import { Toaster } from '@components/ui/toast/toaster';
import { bottomNavSize } from '@constants/nav';
import { useDefaultModal } from '@hooks/useDefaultModal';
import { useEnrollmentStore } from '@stores/enrollment-store';
import { gnbState } from '@stores/gnb-store';
import { gnhState } from '@stores/gnh-store';
import { menuStore } from '@stores/menu-store';
import { navStore } from '@stores/nav-store';
import { isLoggedIn } from '@utils/token';
import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { WithReactChildren } from '@/types/default-interfaces';

type DefaultLayoutProps = WithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
   const { title, backButton, isMain } = gnbState();
   const { headingText, subHeadingText, headingStyle, subHeadingStyle, dropDown } = gnhState();
   const { fullscreen, rounded, margin } = navStore();
   const { menuOpen } = menuStore();
   const defaultStyle = 'w-[390px] mx-auto bg-black';

   const { enrollment } = useEnrollmentStore();
   const { pathname } = useLocation();
   const { modal } = useDefaultModal();

   useEffect(() => {
      if (pathname.indexOf('/mypage') === -1 && enrollment === false && isLoggedIn) {
         setTimeout(() => {
            modal({
               content: '회원 정보 업데이트 후 이용 가능합니다.',
               target: '/mypage/update',
               disableCancle: true,
            });
         }, 500);
      }
   }, [pathname, enrollment]);

   return (
      <div className={defaultStyle}>
         {menuOpen ? (
            <Menu />
         ) : (
            <>
               <Gnb
                  left={backButton ? <Gnb.GoBack /> : isMain ? <Gnb.Logo /> : null}
                  center={title ? <Gnb.Title>{title}</Gnb.Title> : null}
               />
               {headingText && (
                  <Gnh
                     headingText={headingText}
                     subHeadingText={subHeadingText}
                     headingStyle={headingStyle}
                     subHeadingStyle={subHeadingStyle}
                     dropDown={dropDown}
                  />
               )}
               <div
                  className='w-[390px] mx-auto overflow-y-auto overflow-x-hidden'
                  style={{ marginBottom: bottomNavSize, marginTop: margin }}
                  {...props}
               >
                  <div
                     className={`${rounded && 'rounded-t-3xl pt-4'} 
                   flex flex-col bg-white`}
                  >
                     {children}
                  </div>
               </div>
               <Toaster />
               <AnimatePresence>
                  {!fullscreen && (
                     <>
                        <Nav />
                     </>
                  )}
               </AnimatePresence>
            </>
         )}
      </div>
   );
}
