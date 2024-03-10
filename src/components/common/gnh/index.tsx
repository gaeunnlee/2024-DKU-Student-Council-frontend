import React, { Fragment } from 'react';
import Selector, { TOption } from 'components/ui/selector';

interface GnhProps {
   headingText: string;
   subHeadingText?: string;
   subHeadingStyle: string;
   headingStyle: string;
   dropDown?: TOption[];
}

const Gnh = ({ headingText, subHeadingText, headingStyle, subHeadingStyle, dropDown }: GnhProps) => {
   return (
      <Fragment>
         {headingText && (
            <h1 className={`${headingStyle} text-2xl font-extrabold text-white`}>{headingText}</h1>
         )}
         {dropDown !== undefined && dropDown.length > 0 && subHeadingText ? (
            <Selector list={dropDown} subHeadingText={subHeadingText} />
         ) : (
            <h2 className={`${subHeadingStyle} text-white`}>{subHeadingText}</h2>
         )}
      </Fragment>
   );
};

export default Gnh;
