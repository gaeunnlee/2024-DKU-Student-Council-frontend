import Menu from '@components/main/menu';
import { menuStore } from '@stores/menu-store';
import React from 'react';

const DefaultLayout = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
   const { menuOpen } = menuStore();
   return (
      <div className={`w-[390px] mx-auto bg-black ${className ?? ''}`} {...props}>
         {menuOpen ? (
            <Menu />
         ) : (
            children
         )}
      </div>
   );
};

export default DefaultLayout;
