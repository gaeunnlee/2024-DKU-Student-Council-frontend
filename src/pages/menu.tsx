import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from 'hooks/useLayout';
import SvgIcon from 'components/common/icon/SvgIcon';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { ROUTES } from 'constant';

interface MenuItemProps {
   title: string;
   onClick: () => void;
   isOpen: boolean;
   subItems: React.ReactNode;
}

const menuItems = [
   {
      title: '총학생회',
      subItems: [
         { title: '인사말', path: ROUTES.COUNCIL.GREETING },
         { title: '조직도', path: ROUTES.COUNCIL.ORGANIZATION },
         { title: '오시는 길', path: ROUTES.COUNCIL.LOCATION },
         { title: '공지', path: ROUTES.NOTICE.ROOT },
         { title: '회의록', path: ROUTES.NOTICE.ROOT },
         { title: '회칙', path: ROUTES.NOTICE.ROOT },
         { title: '청원게시판', path: ROUTES.PETITION.ROOT },
      ],
   },
   {
      title: '부원모집',
      subItems: [{ title: '모집요강', path: ROUTES.COUNCIL.RECRUITMENT }],
   },
];

const MenuItem = ({ title, onClick, isOpen, subItems }: MenuItemProps) => (
   <>
      <section
         className='flex justify-between items-center text-white bg-black 
         py-[15px] pl-[17px] pr-[27px] cursor-pointer shadow-custom mb-[1px] mt-[2px]'
         onClick={onClick}
      >
         <h2>{title}</h2>
         <SvgIcon id='arrow_down' width={19} height={11} />
      </section>
      {isOpen && <div>{subItems}</div>}
   </>
);

interface SubMenuProps {
   items: { title: string; path: string }[];
   navigate: (path: string) => void;
}

const SubMenu = ({ items, navigate }: SubMenuProps) => (
   <ul className='flex flex-col bg-[#353535] cursor-pointer'>
      {items.map((item, index) => (
         <li
            key={index}
            onClick={() => navigate(item.path)}
            className='text-white flex items-center justify-between pl-[40px] py-[15px] pr-8'
         >
            <h3>{item.title}</h3>
            <SvgIcon id='arrow_right' width={15} height={10} />
         </li>
      ))}
   </ul>
);

const Menu = () => {
   const { setLayout } = useLayout();
   const navigate = useNavigate();

   useEffectOnce(() =>
      setLayout({
         topHeader: true,
         title: null,
         backButton: false,
         isMain: true,
         fullscreen: true,
         background: false,
         heading: null,
         subHeading: null,
         rounded: false,
      }),
   );

   const [activeMenus, setActiveMenus] = useState<string[]>([]);

   const handleMenuClick = (menu: string) => {
      setActiveMenus((prevMenus) => {
         if (prevMenus.includes(menu)) {
            return prevMenus.filter((prevMenu) => prevMenu !== menu);
         } else {
            return [...prevMenus, menu];
         }
      });
   };

   return (
      <>
         {menuItems.map((menuItem, index) => (
            <MenuItem
               key={index}
               title={menuItem.title}
               onClick={() => handleMenuClick(menuItem.title)}
               isOpen={activeMenus.includes(menuItem.title)}
               subItems={<SubMenu items={menuItem.subItems} navigate={navigate} />}
            />
         ))}
      </>
   );
};

export default Menu;
