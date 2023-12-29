import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import back from '../../../assets/icons/go_back.svg';
import { ROUTES } from 'constant';

interface Props extends React.ComponentProps<'header'> {
   left?: JSX.Element | null;
   center?: JSX.Element | null;
}

export default function Gnb({ left, center, ...props }: Props) {
   return (
      <header
         className={`w-[390px] flex mx-auto px-1.5 py-1.5 h-[50px] items-center bg-black ${
            typeof props.className !== 'undefined' ? props.className : ''
         }`}
         {...props}
      >
         <div className='flex items-center space-x-32'>
            {left && left}
            {center && center}
         </div>
      </header>
   );
}

Gnb.Logo = function Logo() {
   return (
      <Link to={ROUTES.MAIN}>
         <img src={logo} alt='단국대학교 로고' className='ml-3' />
      </Link>
   );
};

Gnb.GoBack = function GoBack() {
   const navigate = useNavigate();
   return (
      <button onClick={() => navigate(-1)}>
         <img src={back} alt='뒤로가기 버튼' className='ml-4' />
      </button>
   );
};

Gnb.Title = function Title({ children }: { children: React.ReactNode }) {
   return <h1 className='font-semibold justify-self-center text-white text-xs'>{children}</h1>;
};
