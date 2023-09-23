import React from 'react';
import Gnb from 'components/common/gnb';
import Nav from 'components/common/nav';
import { CONSTANTS } from 'constant';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import { gnbState } from 'stores/gnb-store';
import { navStore } from 'stores/nav-store';
import { AnimatePresence } from 'framer-motion';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, className, ...props }: DefaultLayoutProps) {
   const { title, backButton } = gnbState();
   const { fullscreen } = navStore();
   return (
      <>
         {title ? (
            <Gnb left={backButton ? <Gnb.GoBack /> : undefined} center={<Gnb.Title>{title}</Gnb.Title>} />
         ) : (
            <Gnb left={backButton ? <Gnb.GoBack /> : undefined} center={<Gnb.Logo />} />
         )}

         <div
            className={`flex flex-col max-w-3xl mx-auto overflow-y-auto overflow-x-hidden ${className ?? ''}`}
            style={{ marginBottom: CONSTANTS.bottomNavSize }}
            {...props}
         >
            {children}
         </div>
         <AnimatePresence>{!fullscreen && <Nav />}</AnimatePresence>
      </>
   );
}
