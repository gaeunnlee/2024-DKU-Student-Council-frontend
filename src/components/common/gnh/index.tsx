import React, { Fragment } from 'react';

interface GnhProps {
   headingText: string;
   subHeadingText?: string;
   subHeadingStyle: string;
   headingStyle: string;
}

const Gnh = ({ headingText, subHeadingText, headingStyle, subHeadingStyle }: GnhProps) => (
   <Fragment>
      {headingText && <h1 className={`${headingStyle} text-2xl font-extrabold text-white`}>{headingText}</h1>}
      {subHeadingText && <h2 className={`${subHeadingStyle} text-white`}>{subHeadingText}</h2>}
   </Fragment>
);

export default Gnh;
