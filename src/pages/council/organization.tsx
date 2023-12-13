import React from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';

export default function Organization() {
   const { setFullscreen, setTitle, setHeading, setSubHeading, setBackButton } = useLayout();

   useEffectOnce(() => {
      setFullscreen(false);
      setTitle('총학생회');
      setHeading('총학생회');
      setSubHeading('조직도');
      setBackButton(true);
   });

   return (
      <>
         <h1>조직도입니다</h1>
      </>
   );
}
