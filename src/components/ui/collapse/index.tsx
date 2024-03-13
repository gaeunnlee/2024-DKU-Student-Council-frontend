import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';

export default function Collapse({
   children,
   status,
   size,
   title,
   className,
}: {
   children: React.ReactNode;
   status: boolean;
   size?: string;
   title?: JSX.Element;
   className?: string;
}) {
   const [open, setOpen] = useState(status);
   const [button, setButton] = useState({ icon: IoMdArrowDropdownCircle });

   useEffect(() => {
      setButton(() => {
         return open ? { icon: IoMdArrowDropupCircle } : { icon: IoMdArrowDropdownCircle };
      });
   }, [open]);

   return (
      <>
         <motion.div
            className={`flex items-center ${title || 'justify-end'} ${size || 'text-5xl'} ${className}`}
         >
            {title}
            <button.icon
               onClick={() => {
                  setOpen((prev) => !prev);
               }}
               className='cursor-pointer'
            />
         </motion.div>
         <motion.div animate={{ y: open ? [50, 0] : [-50, 0] }}>{open && children}</motion.div>
      </>
   );
}
