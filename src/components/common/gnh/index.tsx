import React from 'react';

interface GnhProps {
   heading: string;
   subHeading: string | null;
   isMain: boolean;
}

const Gnh = ({ heading, subHeading, isMain }: GnhProps) => (
   <>
      <div className={'w-[390px] mx-auto px-8 py-8 justify-between h-[160px] items-center bg-black'}>
         {heading && (
            <h2
               className={`${
                  isMain ? 'text-center mb-1 font-black' : 'mb-4'
               } text-2xl font-extrabold text-white`}
            >
               {heading}
            </h2>
         )}
         {subHeading && (
            <h3
               className={`${
                  isMain ? 'text-xs text-center font-normal' : 'text-xl font-semibold'
               } text-white`}
            >
               {subHeading}
            </h3>
         )}
      </div>
   </>
);

export default Gnh;
