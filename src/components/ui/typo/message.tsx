import React from 'react';

export default function Message({ children }: { children: React.ReactNode }) {
   return <p className='text-[11px] text-center'>{children}</p>;
}
