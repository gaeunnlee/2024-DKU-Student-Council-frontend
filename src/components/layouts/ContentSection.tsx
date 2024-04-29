import Nav from '@components/common/nav';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

interface ContentSectionProps extends React.ComponentProps<'div'> {
    showNav?: boolean;
}

const ContentSection = ({ children, className, showNav, ...props }: ContentSectionProps) => {
   return (
      <div className={`rounded-t-3xl pt-4 flex flex-col bg-white ${className ?? ''} 
      ${showNav ? 'mb-20' : ''}`} {...props}>
         {children}
         {showNav && (
            <AnimatePresence>
               <Nav />
            </AnimatePresence>
         )}
      </div>
   );
};

export default ContentSection;
