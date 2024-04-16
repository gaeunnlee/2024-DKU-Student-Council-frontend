import React from 'react';

const DefaultLayout = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
   return (
      <div className={`w-[390px] mx-auto bg-black ${className ?? ''}`} {...props}>{children}</div>
   );
};

export default DefaultLayout;
