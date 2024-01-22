import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import { useAlert } from '../../hooks/useAlert';
import Checkbox from '../../components/ui/input/checkbox';

export default function SignupTerms() {
   const { alert } = useAlert();

   const [agreeCheck, setAgreeCheck] = useState([false, false, false]);
   const navigate = useNavigate();

   const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const newAgreeCheck = [...agreeCheck];
      if (name === 'agree1') {
         newAgreeCheck[0] = !newAgreeCheck[0];
      } else if (name === 'agree2') {
         newAgreeCheck[1] = !newAgreeCheck[1];
      } else if (name === 'agree3') {
         newAgreeCheck[2] = !newAgreeCheck[2];
      }
      setAgreeCheck(newAgreeCheck);
   };

   const onAllCheckboxChange = () => {
      if (agreeCheck[0] && agreeCheck[1] && agreeCheck[2]) {
         const newAgreeCheck = [false, false, false];
         setAgreeCheck(newAgreeCheck);
      } else {
         const newAgreeCheck = [true, true, true];
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
                     onChange={onAllCheckboxChange}
                  />
               </label>
               <p />
               <Checkbox
                  name='agree1'
                  checked={agreeCheck[0]}
                  onChange={onCheckboxChange}
                  label='단국대학교 총학생회 홈페이지는 단국대학교 홈페이지 서비스 회원가입 및 본인 인증을 위하여
                  아래와 같이 개인정보를 수집, 이용합니다.'
               />
            </div>

            <div>
               <Checkbox
                  name='agree2'
                  checked={agreeCheck[1]}
                  onChange={onCheckboxChange}
                  label='단국대학교 총학생회는 회원님의 개인정보를 개인정보 처리방침에서 고지한 제 3자 제공범위
                  내에서 제공하며, 정보주체의 사전 동의 없이 범위를 초과하여 제 3자에게 제공하지 않습니다.'
               />
            </div>

            <div>
               <Checkbox
                  name='agree3'
                  checked={agreeCheck[2]}
                  onChange={onCheckboxChange}
                  label='단국대학교 총학생회는 단국대학교 학생임을 인증하기 위하여 아래와 같이 단국대학교 홈페이지 내
                  개인정보를 수집, 이용합니다.'
               />
            </div>
         </div>

         <button onClick={goNext}>동의 완료</button>
      </>
   );
}
