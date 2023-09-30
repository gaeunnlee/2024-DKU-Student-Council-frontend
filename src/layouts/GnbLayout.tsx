import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import Gnb from 'components/common/gnb';
import Nav from 'components/common/nav';
import { ROUTES } from 'constant';

interface ILayoutVariant {
   path: string;
   header: React.ReactNode;
   fullscreen?: boolean;
}

const layoutVariant: ILayoutVariant[] = [
   {
      path: ROUTES.MAIN,
      header: <Gnb left={<Gnb.Notification />} center={<Gnb.Logo />} />,
   },
   {
      path: ROUTES.LOGIN,
      header: <Gnb left={<Gnb.GoBack />} center={<Gnb.Title>로그인</Gnb.Title>} />,
      fullscreen: true,
   },
   {
      path: ROUTES.SIGNUP.ROOT,
      header: <Gnb left={<Gnb.GoBack />} center={<Gnb.Title>회원가입</Gnb.Title>} />,
   },
   {
      path: ROUTES.MYPAGE,
      header: <Gnb center={<Gnb.Title>마이페이지</Gnb.Title>} />,
   },
];

export default function GnbLayout({ children }: IWithReactChildren) {
   const location = useLocation();
   const currentPath = location.pathname;
   const currentLayout = layoutVariant.find((layout) => layout.path === currentPath);

   return (
      <>
         {currentLayout?.header}
         {children}
         <AnimatePresence>{!currentLayout?.fullscreen && <Nav />}</AnimatePresence>
      </>
   );
}
