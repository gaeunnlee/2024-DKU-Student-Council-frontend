import Gnb from 'components/common/gnb';
import Gnh from 'components/common/gnh';
import Nav from 'components/common/nav';
import { bottomNavSize } from 'constants/style';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import { gnbState } from 'stores/gnb-store';
import { gnhState } from 'stores/gnh-store';
import { navStore } from 'stores/nav-store';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

type DefaultLayoutProps = IWithReactChildren & React.HTMLAttributes<HTMLDivElement>;

export default function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
   const { title, backButton, isMain } = gnbState();
   const { heading, subHeading, headingStyle, subHeadingStyle } = gnhState();
   const { fullscreen, rounded, margin } = navStore();

   const defaultStyle = 'w-[390px] mx-auto bg-black';

   return (
      <div className={defaultStyle}>
         <Gnb
            left={backButton ? <Gnb.GoBack /> : isMain ? <Gnb.Logo /> : null}
            center={title ? <Gnb.Title>{title}</Gnb.Title> : null}
         />
         {heading && (
            <Gnh
               heading={heading}
               subHeading={subHeading}
               headingStyle={headingStyle}
               subHeadingStyle={subHeadingStyle}
            />
         )}
         <div
            className='w-[390px] mx-auto overflow-y-auto overflow-x-hidden'
            style={{ marginBottom: bottomNavSize }}
            {...props}
         >
            <div
               className={`${rounded && 'rounded-t-xl pt-4'} 
            ${margin} flex flex-col bg-white`}
            >
               {children}
            </div>
         </div>
         <AnimatePresence>
            {!fullscreen && (
               <>
                  <Nav />
               </>
            )}
         </AnimatePresence>
      </div>
   );
}
