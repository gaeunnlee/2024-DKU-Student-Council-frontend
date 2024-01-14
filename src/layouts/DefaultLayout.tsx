import React from 'react';
import Gnb from 'components/common/gnb';
import Gnh from 'components/common/gnh';
import Nav from 'components/common/nav';
import { CONSTANTS } from 'constant';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';
import { AnimatePresence } from 'framer-motion';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, className, ...props }: DefaultLayoutProps) {
   const { topHeader, title, backButton, isMain } = gnbState();
   const { heading, subHeading, rounded } = gnhState();
   const { fullscreen } = navStore();

   return (
      <>
         {topHeader && (
            <Gnb
               left={backButton ? <Gnb.GoBack /> : isMain ? <Gnb.Logo /> : null}
               center={title ? <Gnb.Title>{title}</Gnb.Title> : null}
            />
         )}
         {heading !== null && subHeading !== null && (
            <Gnh heading={heading} subHeading={subHeading} isMain={isMain} />
         )}
         <div
            className={`w-[390px] mx-auto overflow-y-auto overflow-x-hidden bg-black ${className ?? ''}`}
            style={{ marginBottom: CONSTANTS.bottomNavSize }}
            {...props}
         >
            <div className={`${rounded && 'rounded-t-xl pt-4'} flex flex-col bg-white`}>{children}</div>
         </div>
         <AnimatePresence>
            {!fullscreen && (
               <>
                  <Nav />
               </>
            )}
         </AnimatePresence>
      </>
   );
}
