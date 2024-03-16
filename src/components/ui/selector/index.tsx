import IconButton from '@components/ui/button/IconButton';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export type TOption = {
   text: string;
   path: string;
};

type SubHeadingProps = {
   className?: string;
   id: string;
};

export default function Selector({ list, subHeadingText }: { list: TOption[]; subHeadingText: string }) {
   const [open, setOpen] = React.useState<boolean>(false);
   const [selected, setSelected] = React.useState<string>(subHeadingText);

   React.useEffect(() => {
      setSelected(subHeadingText);
   }, [subHeadingText]);

   const navigate = useNavigate();
   const handleOption = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const handleSelect = (option: TOption) => {
      setSelected(option.text);
      setOpen(false);
      navigate(option.path);
   };

   const SubHeadingText = ({ className, id }: SubHeadingProps) => {
      return (
         <div className={`flex items-center gap-1 ml-[29px] ${className}`}>
            <h2 className='text-xl font-extrabold text-white'>{selected}</h2>
            <IconButton id={id} width={18} height={18} onClick={handleOption} />
         </div>
      );
   };

   return (
      <Fragment>
         {!open ? (
            <SubHeadingText className='mb-[30px]' id='drop_down_circle' />
         ) : (
            <Fragment>
               <SubHeadingText className='mb-3' id='drop_up_circle' />
               <ul className='ml-[29px] w-20 mb-[30px]'>
                  {list
                     .filter((option) => option.text !== subHeadingText)
                     .map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)} className='cursor-pointer mb-2'>
                           <h2 className='text-white font-extrabold'>{option.text}</h2>
                        </li>
                     ))}
               </ul>
            </Fragment>
         )}
      </Fragment>
   );
}
