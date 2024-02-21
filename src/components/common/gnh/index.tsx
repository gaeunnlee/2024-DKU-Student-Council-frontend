import React from 'react';

interface GnhProps {
   heading: string;
   subHeading: string | null;
   headingStyle: string;
   headingText: string;
   subHeadingText: string;
}

const Gnh = ({ heading, subHeading, headingStyle, headingText, subHeadingText }: GnhProps) => (
   <div className={`${headingStyle}`}>
      <h2 className={`${headingText} text-2xl font-extrabold text-white`}>{heading}</h2>
      {subHeading && <h3 className={`${subHeadingText} text-white`}>{subHeading}</h3>}
   </div>
);

export default Gnh;
