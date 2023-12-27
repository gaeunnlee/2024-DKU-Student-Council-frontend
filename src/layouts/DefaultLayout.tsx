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
import { TextSkeleton } from 'components/ui/skeleton';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, className, ...props }: DefaultLayoutProps) {
   const { title, backButton, isMain } = gnbState();
   const { heading, subHeading } = gnhState();
   const { fullscreen } = navStore();
   return (
      <>
         <Gnb
            left={backButton ? <Gnb.GoBack /> : isMain ? <Gnb.Logo /> : null}
            center={<Gnb.Title>{title || <TextSkeleton width={4} />}</Gnb.Title>}
         />
         {heading !== null && (subHeading !== null || subHeading === '') && (
            <Gnh heading={heading} subHeading={subHeading} isMain={isMain} />
         )}
         <div
            className={`w-[390px] mx-auto overflow-y-auto overflow-x-hidden bg-black ${className ?? ''}`}
            style={{ marginBottom: CONSTANTS.bottomNavSize }}
            {...props}
         >
            <div className='flex flex-col rounded-t-xl bg-white pt-4'>{children}</div>
         </div>
         <AnimatePresence>{!fullscreen && <Nav />}</AnimatePresence>
      </>
   );
}
