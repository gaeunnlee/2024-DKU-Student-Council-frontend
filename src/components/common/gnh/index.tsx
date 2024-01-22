import React from 'react';

interface GnhProps {
   heading: string;
   subHeading: string | null;
   headingStyle: string;
   subHeadingStyle: string;
}

const Gnh = ({ heading, subHeading, headingStyle, subHeadingStyle }: GnhProps) => (
   <>
      <h2 className={`${headingStyle} text-2xl font-extrabold text-white`}>{heading}</h2>
      {subHeading && <h3 className={`${subHeadingStyle} text-white`}>{subHeading}</h3>}
   </>
);

export default Gnh;
