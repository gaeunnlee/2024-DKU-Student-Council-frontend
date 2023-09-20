import React from 'react';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

export default function Login() {
   const [agreeCheck, setAgreeCheck] = useState([false, false]);
   //const navigate = useNavigate();

   const handleCheckboxChange = (index: number) => {
      const newAgreeCheck = [...agreeCheck];
      newAgreeCheck[index] = !newAgreeCheck[index];
      setAgreeCheck(newAgreeCheck);
   };

   const nexthandle = () => {
      // 체크 여부 확인
      if (agreeCheck[0] === true && agreeCheck[1] === true && agreeCheck[2] === true) {
         // 회원가입 다음 화면으로
         // navigate(ROUTE.);
      } else {
         alert('약관에 동의해야 회원가입이 가능합니다.');
      }
   };

   return (
      <>
         <div>
            <div>
               <label>
                  <input
                     type='checkbox'
                     name='agree1'
                     checked={agreeCheck[0]}
                     onChange={() => handleCheckboxChange(0)}
                  />
                  <span>[필수]</span>개인정보 수집, 이용 동의
               </label>
               <p>
                  단국대학교 총학생회 홈페이지는 단국대학교 홈페이지 서비스 회원가입 및 본인 인증을 위하여
                  아래와 같이 개인정보를 수집, 이용합니다.{' '}
               </p>
            </div>

            <div>
               <label>
                  <input
                     type='checkbox'
                     id='2'
                     name=''
                     checked={agreeCheck[1]}
                     onChange={() => handleCheckboxChange(1)}
                  />
                  <span>[필수]</span>개인정보 제 3자 제공 동의
               </label>
               <p>
                  단국대학교 총학생회는 회원님의 개인정보를 개인정보 처리방침에서 고지한 제 3자 제공범위
                  내에서 제공하며, 정보주체의 사전 동의 없이 범위를 초과하여 제 3자에게 제공하지 않습니다.
               </p>
            </div>

            <div>
               <label>
                  <input
                     type='checkbox'
                     id='3'
                     name='xxx'
                     value='yyy'
                     checked={agreeCheck[2]}
                     onChange={() => handleCheckboxChange(2)}
                  />
                  <span>[필수]</span>개인정보 수집, 이용 동의
               </label>
               <p>
                  단국대학교 총학생회는 단국대학교 학생임을 인증하기 위하여 아래와 같이 단국대학교 홈페이지 내
                  개인정보를 수집, 이용합니다.
               </p>
            </div>
         </div>

         <button onClick={nexthandle}>동의 완료</button>
      </>
   );
}
