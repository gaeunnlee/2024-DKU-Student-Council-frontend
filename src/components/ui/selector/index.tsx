import { ROUTES } from 'constants/route';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '../button/IconButton';

type TCouncil = {
   text: string;
   path: string;
};

type SubHeadingProps = {
   className?: string;
   id: string;
};

export default function Selector({ subHeadingText }: { subHeadingText: string }) {
   const [open, setOpen] = useState<boolean>(false);
   const [selected, setSelected] = useState<string>(subHeadingText);

   const navigate = useNavigate();
   const handleOption = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const COUNCIL_LIST: TCouncil[] = [
      { text: '공지', path: ROUTES.NOTICE.ROOT },
      { text: '회의록', path: ROUTES.CONFERENCE.ROOT },
      { text: '회칙', path: ROUTES.RULE.ROOT },
      { text: '인사말', path: ROUTES.COUNCIL.GREETING },
      { text: '조직도', path: ROUTES.COUNCIL.ORGANIZATION },
      { text: '오시는 길', path: ROUTES.COUNCIL.LOCATION },
   ];

   const handleSelect = (council: TCouncil) => {
      setSelected(council.text);
      setOpen(false);
      navigate(council.path);
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
                  {COUNCIL_LIST.filter((council) => council.text !== subHeadingText).map((council, index) => (
                     <li key={index} onClick={() => handleSelect(council)} className='cursor-pointer mb-2'>
                        <h2 className='text-white font-extrabold'>{council.text}</h2>
                     </li>
                  ))}
               </ul>
            </Fragment>
         )}
      </Fragment>
   );
}
