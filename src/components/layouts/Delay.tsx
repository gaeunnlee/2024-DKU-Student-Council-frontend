import { useEffect, useState } from 'react';

interface DelayProps {
   children: JSX.Element;
   delay?: number;
}

export default function Delay({ children, delay = 300 }: DelayProps) {
   const [isShown, setIsShown] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsShown(true);
      }, delay);

      return () => {
         clearTimeout(timer);
      };
   }, [delay]);

   return isShown ? children : null;
}
