import logo from '@assets/images/logo.png';
import IconButton from '@components/ui/button/IconButton';
import { ROUTES } from '@constants/route';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props extends React.ComponentProps<'header'> {
   left?: JSX.Element | null;
   center?: JSX.Element | null;
}

export default function Gnb({ left, center, ...props }: Props) {
   return (
      <header
         className={`w-[390px] flex mx-auto px-[22px] py-1.5 h-[50px] items-center ${
            typeof props.className !== 'undefined' ? props.className : ''
         }`}
         {...props}
      >
         <div className='w-full flex items-center'>
            {left && left}
            {center && center}
         </div>
      </header>
   );
}

Gnb.Logo = function Logo() {
   return (
      <Link to={ROUTES.MAIN}>
         <img src={logo} alt='단국대학교 로고' />
      </Link>
   );
};

Gnb.GoBack = function GoBack() {
   const navigate = useNavigate();
   return <IconButton id='arrow_back' width={18} height={22} color='white' onClick={() => navigate(-1)} />;
};

Gnb.Title = function Title({ children }: { children: string }) {
   return <h1 className='font-semibold mx-auto text-white text-xs'>{children}</h1>;
};
