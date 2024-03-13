import Selector from '@components/ui/selector';
import React from 'react';

interface GnhProps {
   headingText: string;
   subHeadingText?: string;
   subHeadingStyle: string;
   headingStyle: string;
}

const Gnh = ({ headingText, subHeadingText, headingStyle, subHeadingStyle }: GnhProps) => (
   <React.Fragment>
      {headingText && <h1 className={`${headingStyle} text-2xl font-extrabold text-white`}>{headingText}</h1>}
      {headingText === '총학생회' && subHeadingText ? (
         <Selector subHeadingText={subHeadingText} />
      ) : (
         <h2 className={`${subHeadingStyle} text-white`}>{subHeadingText}</h2>
      )}
   </React.Fragment>
);

export default Gnh;
