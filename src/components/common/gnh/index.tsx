import React from 'react';

interface GnhProps {
   heading: string;
   subHeading: string | null;
   headingStyle: string;
   subHeadingStyle: string;
}

const Gnh = ({ heading, subHeading, headingStyle, subHeadingStyle }: GnhProps) => (
   <div className='pt-[41px] pb-[61px]'>
      <h2 className={`${headingStyle} text-2xl font-extrabold text-white`}>{heading}</h2>
      {subHeading && <h3 className={`${subHeadingStyle} text-white`}>{subHeading}</h3>}
   </div>
);

export default Gnh;
