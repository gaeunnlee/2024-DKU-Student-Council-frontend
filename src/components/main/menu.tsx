import logo from '@assets/images/logo.png';
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from '@components/common/shadcn-ui/accordion';
import { ROUTES } from '@constants/route';
import { menuStore } from '@stores/menu-store';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
   const { setMenuOpen } = menuStore();

   const navigate = useNavigate();
   const handleNavigate = (path: string) => {
      navigate(path);
      setMenuOpen(false);
   };

   const MENUITEM = [
      {
         title: '총학생회',
         subItems: [
            { title: '인사말', path: ROUTES.COUNCIL.GREETING },
            { title: '조직도', path: ROUTES.COUNCIL.ORGANIZATION },
            { title: '오시는 길', path: ROUTES.COUNCIL.LOCATION },
            { title: '공지', path: ROUTES.NOTICE.ROOT },
            { title: '회의록', path: ROUTES.CONFERENCE.ROOT },
            { title: '회칙', path: ROUTES.RULE.ROOT },
            { title: '청원게시판', path: ROUTES.PETITION.ROOT },
         ],
      },
      {
         title: '부원모집',
         subItems: [{ title: '모집요강', path: ROUTES.COUNCIL.RECRUITMENT }],
      },
   ];
   return (
      <React.Fragment>
         <header className='px-[22px] py-1.5 h-[50px] flex items-center mx-auto'>
            <img
               className='cursor-pointer'
               onClick={() => {
                  setMenuOpen(false);
               }}
               src={logo}
               alt='단국대학교 로고'
            />
         </header>
         <Accordion type='single' collapsible className='w-full'>
            {MENUITEM.map((menu, index) => (
               <React.Fragment key={index}>
                  <AccordionItem value={`menu-${index + 1}`}>
                     <AccordionTrigger>{menu.title}</AccordionTrigger>
                     {menu.subItems.map((subItem, subIndex) => (
                        <AccordionContent onClick={() => handleNavigate(subItem.path)} key={subIndex}>
                           {subItem.title}
                        </AccordionContent>
                     ))}
                  </AccordionItem>
               </React.Fragment>
            ))}
         </Accordion>
      </React.Fragment>
   );
}
