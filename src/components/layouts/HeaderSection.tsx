import React from 'react';

const HeaderSection = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
   return (
      <div className={`${className ?? ''}`} {...props}>
         {children}
      </div>
   );
};

export default HeaderSection;