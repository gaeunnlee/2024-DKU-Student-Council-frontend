import React, { Fragment } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { ROUTES } from 'constants/route';
import { useNavigate } from 'react-router-dom';
import SvgIcon from 'components/common/icon/SvgIcon';
import logo from 'assets/images/logo.png';
import { menuStore } from 'stores/menu-store';

export default function Menu() {
   const menuItems = [
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
   const navigate = useNavigate();
   const { setMenuOpen } = menuStore();

   const handleNavigate = (path: string) => {
      navigate(path);
      setMenuOpen(false);
   };

   return (
      <Fragment>
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
         <Accordion defaultIndex={[0]} allowMultiple>
            {menuItems.map((item, index) => (
               <AccordionItem key={index}>
                  <h2>
                     <AccordionButton className='bg-black text-white py-[15px] pl-[17px] pr-[27px]'>
                        <Box as='span' flex='1' textAlign='left'>
                           {item.title}
                        </Box>
                        <SvgIcon id='arrow_down' width={19} height={9} />
                     </AccordionButton>
                  </h2>
                  {item.subItems.map((subItem, index) => (
                     <AccordionPanel
                        pb={4}
                        key={index}
                        onClick={() => handleNavigate(subItem.path)}
                        className='bg-[#353535] flex items-center justify-between pl-[40px] py-[15px] pr-8 text-white cursor-pointer'
                     >
                        {subItem.title}
                        <SvgIcon id='arrow_right' width={15} height={12} />
                     </AccordionPanel>
                  ))}
               </AccordionItem>
            ))}
         </Accordion>
      </Fragment>
   );
}
