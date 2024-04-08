import React from 'react';

export default function MainSectionLayout({ children }: { children: React.ReactNode }) {
   return <section className='px-4 py-5 m-4 rounded-xl bg-white shadow-md'>{children}</section>;
}
