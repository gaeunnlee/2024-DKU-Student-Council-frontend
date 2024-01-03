import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Collapse({ children, status }: { children: React.ReactNode; status: boolean }) {
   const [open, setOpen] = useState(status);
   const [button, setButton] = useState({ icon: IoMdArrowDropdownCircle });

   useEffect(() => {
      setButton(() => {
         return open ? { icon: IoMdArrowDropupCircle } : { icon: IoMdArrowDropdownCircle };
      });
   }, [open]);

   return (
      <motion.div animate={{ y: open ? [50, 0] : [-50, 0] }}>
         <motion.div
            className='flex justify-end text-5xl mb-2'
            animate={{ rotateX: open ? [90, 0] : [-90, 0] }}
         >
            <button.icon
               onClick={() => {
                  setOpen((prev) => !prev);
               }}
               className='cursor-pointer'
            />
         </motion.div>
         {open && children}
      </motion.div>
   );
}
