import React from 'react';

// eslint-disable-next-line react/display-name
const IntersectionBox = React.forwardRef<HTMLDivElement>((_, ref) => {
   return <div ref={ref} className='w-full h-6' />;
});

export default IntersectionBox;
