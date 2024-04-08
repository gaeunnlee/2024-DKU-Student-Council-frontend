import { ROUTES } from '@constants/route';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
   return (
      <div>
         <h1>페이지를 찾지 못했어요</h1>
         <h2>주소가 올바른지 확인해 보세요</h2>
         <h3>잠시 후에 다시 시도해 주세요</h3>
         <Link to={ROUTES.MAIN}>메인 화면으로</Link>
         <button onClick={() => window.location.reload()}>새로고침</button>
      </div>
   );
}
