import React from 'react';

interface GnhProps {
   heading: string;
   subHeading: string | null;
   children?: React.ReactNode;
}

const Gnh = ({ heading, subHeading }: GnhProps) => (
   <>
      <div className={'w-full justify-between px-1.5 h-[80px] items-center bg-black'}>
         <h2 className='text-2xl font-semibold mb- text-white'>{heading}</h2>
         <h3 className='text-xl font-semibold text-white'>{subHeading}</h3>
      </div>
   </>
);

export default Gnh;
