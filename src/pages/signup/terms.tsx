import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constant';

export default function SignupTerms() {
   const [agreeCheck, setAgreeCheck] = useState([false, false, false]);
   const navigate = useNavigate();

   const onCheckboxChange = (index: number) => {
      if (index === 3) {
         if (agreeCheck[0] && agreeCheck[1] && agreeCheck[2]) {
            const newAgreeCheck = [false, false, false];
            setAgreeCheck(newAgreeCheck);
         } else {
            const newAgreeCheck = [true, true, true];
            setAgreeCheck(newAgreeCheck);
         }
      } else {
         const newAgreeCheck = [...agreeCheck];
         newAgreeCheck[index] = !newAgreeCheck[index];
         setAgreeCheck(newAgreeCheck);
      }
   };

   const goNext = () => {
      // 체크 여부 확인
      if (agreeCheck[0] && agreeCheck[1] && agreeCheck[2]) {
         navigate(ROUTES.SIGNUP.VERIFY);
      } else {
         alert('약관에 동의해야 회원가입이 가능합니다.');
      }
   };

   return (
      <>
         <div>
            <div>
               <label>
                  모두동의하기
                  <input
                     type='checkbox'
                     checked={agreeCheck[0] && agreeCheck[1] && agreeCheck[2]}
                     onChange={() => onCheckboxChange(3)}
                  />
               </label>
               <p>
                  단국대학교 총학생회 홈페이지는 단국대학교 홈페이지 서비스 회원가입 및 본인 인증을 위하여
                  아래와 같이 개인정보를 수집, 이용합니다. test
               </p>
               <label>
                  <input type='checkbox' checked={agreeCheck[0]} onChange={() => onCheckboxChange(0)} />
                  <span>[필수]</span>개인정보 수집, 이용 동의
               </label>
               <p>
                  단국대학교 총학생회 홈페이지는 단국대학교 홈페이지 서비스 회원가입 및 본인 인증을 위하여
                  아래와 같이 개인정보를 수집, 이용합니다.
               </p>
            </div>

            <div>
               <label>
                  <input type='checkbox' checked={agreeCheck[1]} onChange={() => onCheckboxChange(1)} />
                  <span>[필수]</span>개인정보 제 3자 제공 동의
               </label>
               <p>
                  단국대학교 총학생회는 회원님의 개인정보를 개인정보 처리방침에서 고지한 제 3자 제공범위
                  내에서 제공하며, 정보주체의 사전 동의 없이 범위를 초과하여 제 3자에게 제공하지 않습니다.
               </p>
            </div>

            <div>
               <label>
                  <input type='checkbox' checked={agreeCheck[2]} onChange={() => onCheckboxChange(2)} />
                  <span>[필수]</span>개인정보 수집, 이용 동의
               </label>
               <p>
                  단국대학교 총학생회는 단국대학교 학생임을 인증하기 위하여 아래와 같이 단국대학교 홈페이지 내
                  개인정보를 수집, 이용합니다.
               </p>
            </div>
         </div>

         <button onClick={goNext}>동의 완료</button>
      </>
   );
}
