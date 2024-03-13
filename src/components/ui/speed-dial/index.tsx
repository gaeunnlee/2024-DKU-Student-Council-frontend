import { MotionProps, motion } from 'framer-motion';
import React from 'react';

interface SpeedDialProps extends MotionProps {
   className?: string;
}

export default function SpeedDial({ children, className, ...props }: SpeedDialProps) {
   return (
      <motion.button
         initial={{ scale: 0, bottom: 50 }}
         animate={{ scale: 1, bottom: 80 }}
         className={`fixed right-[1rem] z-10 flex items-end justify-end overflow-hidden break-keep rounded-full shadow-xl ${
            className ?? ''
         }`}
         {...props}
      >
         {children}
      </motion.button>
   );
}
