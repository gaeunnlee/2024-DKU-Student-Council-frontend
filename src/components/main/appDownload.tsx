import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

export default function AppDownload() {
   const buttonInfo = [
      {
         name: 'App Store',
         link: '',
         icon: <FaApple />,
      },
      {
         name: 'Google Play',
         link: '',
         icon: <IoLogoGooglePlaystore />,
      },
   ];
   return (
      <section className='p-6 w-full'>
         <div className='mb-3'>
            <h4 className='font-bold text-lg'>Danvery를 앱에서도 만나보세요!</h4>
            <p className='text-sm'>각종 매칭 서비스를 즐길 수 있습니다</p>
         </div>
         <div className='flex w-full gap-3'>
            {buttonInfo.map(({ name, link, icon }) => (
               <button
                  key={name}
                  className='bg-black px-5 py-2 flex text-white items-center rounded-md gap-2 w-1/2 justify-center'
                  onClick={() => {
                     window.open(link);
                  }}
               >
                  {icon}
                  <p>{name}</p>
               </button>
            ))}
         </div>
      </section>
   );
}
