import React from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

export default function ArrowButton({
   type,
   index,
   setIndex,
   length,
}: {
   type: string;
   index: number;
   setIndex: React.Dispatch<React.SetStateAction<number>>;
   length: number;
}) {
   const arrowStyle = 'drop-shadow-md hover:text-black cursor-pointer';
   const ArrowIcon =
      type === 'next' ? (
         <FaChevronCircleRight className={arrowStyle} />
      ) : (
         <FaChevronCircleLeft className={arrowStyle} />
      );

   return (
      <div
         className={`flex h-full items-center text-white text-xl  absolute ${
            type === 'next' ? 'right-5' : 'left-5'
         }`}
         onClick={() => {
            {
               type === 'next'
                  ? length - 1 !== index && setIndex((prev) => prev + 1)
                  : index !== 0 && setIndex((prev) => prev - 1);
            }
         }}
      >
         {ArrowIcon}
      </div>
   );
}
