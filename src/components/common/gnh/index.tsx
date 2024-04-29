import React from 'react';

const GnhTitle = ({ children, className }: React.ComponentProps<'h1'>) => {
   return (
      <h1 className={`${className ?? ''} text-2xl font-extrabold text-white`}>{children}</h1>
   );
};

const GnhSubtitle = ({ children, className }: React.ComponentProps<'h2'>) => {
   return (
      <h2 className={`${className ?? ''} text-white`}>{children}</h2>
   );
};


export { GnhTitle, GnhSubtitle };

